import {useEffect, useState} from "react";

import {
    HomeContainer,
    HomeHeader,
    GroupsContainer,
    Group,
    GroupItem,
    GroupTitle,
    ResultsContainer,
    GroupResultContainer,
    GroupResultContainerTitle,
    GroupResultContainerItem,
    ResultsTitle,
} from "./styles";

import Logo from "../../assets/images/logo.png";

import Axios from "../../utils/axios";

import GenerateGroups from "../../services/GenerateGroups";
import GroupsStage from "../../services/GroupsStage";

export default function Home(){
	const [loading, setLoading] = useState(true);
	const [showResults, setShowResults] = useState(false);

	const [groups, setGroups] = useState();
	const [gamesResults, setGamesResults] = useState();

	function InitGroupStage(){
		const results = GroupsStage(groups);

		setGamesResults(results);
		setShowResults(true);
	}

	useEffect(() => {
		async function HandleRequest(){
			const teams = await Axios.get("WorldCup/GetAllTeams");
			
			const generatedGroups = GenerateGroups(teams.data.Result);

			setGroups(generatedGroups);
			setLoading(false);
		}

		HandleRequest();
	}, []);

	if(loading){
		return <p>Carregando</p>;
	}

    return (
        <HomeContainer>
            <HomeHeader>
                <img src={Logo} alt="logo"/>
                <button
					onClick={InitGroupStage}
					disabled={showResults}
				>INICIAR FASE DE GRUPOS</button>
            </HomeHeader>
            <GroupsContainer>
				{groups.map((group, index) => (
					<Group key={group.token}>
						<GroupTitle>GRUPO {String.fromCharCode(65 + index)}</GroupTitle>
						{group.map((teams) => (
							<GroupItem>{teams.Name}</GroupItem>
						))}
					</Group>
				))}
            </GroupsContainer>
            {showResults && (
				<>
					<ResultsTitle>Resultados da fase de grupos</ResultsTitle>
					<ResultsContainer>
						{gamesResults.map((resultGroup, index) => (
								<GroupResultContainer>
								<GroupResultContainerTitle>GRUPO {String.fromCharCode(65 + index)}</GroupResultContainerTitle>
								{resultGroup.map((result) => (
									<GroupResultContainerItem>
										<p>{result.team1.name}</p>
										<input readonly value={result.team1.gols}/>
										<input readonly value={result.team2.gols}/>
										<p>{result.team2.name}</p>
									</GroupResultContainerItem>
								))}
							</GroupResultContainer>
						))}
					</ResultsContainer>
				</>
			)}
        </HomeContainer>
    );
}