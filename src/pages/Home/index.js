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

export default function Home(){
	const [groups, setGroups] = useState();
	const [loading, setLoading] = useState(true);

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
                <button>INICIAR FASE DE GRUPOS</button>
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
            <ResultsTitle>Resultados da fase de grupos</ResultsTitle>
            <ResultsContainer>
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Estados Unidos</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer>
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
                <GroupResultContainer>
                    <GroupResultContainerTitle>GRUPO A</GroupResultContainerTitle>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Argentina</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>USA</p>
                            <input></input>
                            <input></input>
                            <p>Soviética</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>asdfasdf</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                    <GroupResultContainerItem>
                            <p>Brasil</p>
                            <input value="2"></input>
                            <input></input>
                            <p>Brasil</p>
                    </GroupResultContainerItem>
                </GroupResultContainer> 
            </ResultsContainer>
        </HomeContainer>
    );
}