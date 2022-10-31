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
	LoadingPage,
	ClassificadosTable,
	ClassificadosRow,
	ClassificadosCel,
	ClassificadosTableHeader,
	NextStepButton
} from "./styles";

import Logo from "../../assets/images/logo.png";
import LoadLogo from "../../assets/images/loadLogo.png"

import Axios from "../../utils/axios";

import GenerateGroups from "../../services/GenerateGroups";
import GroupsStage from "../../services/GroupsStage";
import ClassfiedTeams from "../../services/ClassfiedTeams";

export default function Home(){
	const [loading, setLoading] = useState(true);
	const [showResults, setShowResults] = useState(false);

	const [groups, setGroups] = useState();
	const [gamesResults, setGamesResults] = useState();
	const [classificados, setClassificados] = useState();

	function InitGroupStage(){
		const results = GroupsStage(groups);

		const classificadosResults = ClassfiedTeams(groups, results);
		console.log(classificadosResults);
		setGamesResults(results);
		setClassificados(classificadosResults);
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
		return (
			<LoadingPage>
				<img src={LoadLogo} alt="LoadLogo"/>
			</LoadingPage>
		);
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
										<GroupResultContainerItem >
											<p>{result.team1.name}</p>
											<input readOnly value={result.team1.gols}/>
											<input readOnly value={result.team2.gols}/>
											<p>{result.team2.name}</p>
										</GroupResultContainerItem>
									))}
								</GroupResultContainer>
						))}
					</ResultsContainer>
					<ResultsTitle>Classificados para oitavas de final</ResultsTitle>
					<ClassificadosTable>
						<ClassificadosTableHeader>
							<th>PAÍS</th>
							<th>GRUPO</th>
							<th>PONTOS</th>
							<th>GOLS</th>
						</ClassificadosTableHeader>
						{classificados.map((result, index) => (
							result.map((team) => (
								<ClassificadosRow>
									<ClassificadosCel>{team.Name}</ClassificadosCel>
									<ClassificadosCel>{String.fromCharCode(65 + index)}</ClassificadosCel>
									<ClassificadosCel>{team.points}</ClassificadosCel>
									<ClassificadosCel>{team.gols}</ClassificadosCel>
								</ClassificadosRow>
							))
						))}
					</ClassificadosTable>
					<NextStepButton>IR PARA AS OITAVAS DE FINAL</NextStepButton>
				</>
			)}
        </HomeContainer>
    );
}