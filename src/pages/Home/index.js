import {
    HomeContainer,
    HomeHeader,
    GroupsContainer,
    Group,
    GroupItem,
    GroupTitle,
} from "./styles";

import Logo from "../../assets/images/logo.png";

export default function Home(){
    return (
        <HomeContainer>
            <HomeHeader>
                <img src={Logo} alt="logo"/>
                <button>INICIAR TODAS AS PARTIDAS</button>
            </HomeHeader>
            <GroupsContainer>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
                <Group>
                    <GroupTitle>GRUPO A</GroupTitle>
                    <GroupItem>Brasil</GroupItem>
                    <GroupItem>Argentina</GroupItem>
                    <GroupItem>Equador</GroupItem>
                    <GroupItem>Austrália</GroupItem>
                </Group>
            </GroupsContainer>
        </HomeContainer>
    );
}