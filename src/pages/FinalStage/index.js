import {useState} from "react";

import {useLocation} from "react-router-dom";

import {
    FinalStageContainer,
    FinalStageHeader,
    StagesContainer,
    StageItemContainer,
    StageTitle,
    FirstStageContainer,
    SecondStageContainer,
    ThirdStageContainer,
} from "./styles";

import Logo from "../../assets/images/logo.png";

import FinalStages from "../../services/FinalStages";
import FinalStagesClassification from "../../services/FinalStagesClassification";

export default function FinalStage(){
    const {state} = useLocation();

    const [oitavas, setOitavas] = useState(state.teams);
    const [quartas, setQuartas] = useState([]);
    const [semi, setSemi] = useState([]);
    const [final, setFinal] = useState([]);

    function StartFinalStages(){
        const resultOitavas = FinalStages(state.teams);
        setOitavas(resultOitavas);
        const classificadosQuartas = FinalStagesClassification(resultOitavas);
        const resultQuartas = FinalStages(classificadosQuartas);
        setQuartas(resultQuartas);
        const classificadosSemi = FinalStagesClassification(resultQuartas);
        const resultSemi = FinalStages(classificadosSemi);
        setSemi(resultSemi);

        console.log(resultSemi);
    }

    return (
        <FinalStageContainer>
            <FinalStageHeader>
                <img src={Logo} alt="logo"/>
                <button onClick={StartFinalStages}>INICIAR FASES FINAIS</button>
            </FinalStageHeader>
            <StagesContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    {oitavas.map((team, index) => {
                        if(index < 4){
                            return (
                                <StageItemContainer>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </FirstStageContainer>
                <SecondStageContainer>
                    {quartas.length !== 0 && <StageTitle>QUARTAS DE FINAIS</StageTitle>}
                    {quartas.map((team, index) => {
                        if(index < 2){
                            return (
                                <StageItemContainer>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </SecondStageContainer>
                <ThirdStageContainer>
                    {semi.length !== 0 && <StageTitle>SEMIFINAL</StageTitle>}
                    {semi.map((team, index) => {
                        if(index < 1){
                            return (
                                <StageItemContainer>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </ThirdStageContainer>
                <ThirdStageContainer>
                    {semi.length !== 0 && <StageTitle>SEMIFINAL</StageTitle>}
                    {semi.map((team, index) => {
                        if(index >= 1){
                            return (
                                <StageItemContainer>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </ThirdStageContainer>
                <SecondStageContainer>
                    {quartas.length !== 0 && <StageTitle>QUARTAS DE FINAIS</StageTitle>}
                    {quartas.map((team, index) => {
                        if(index >= 2){
                            return (
                                <StageItemContainer>
                                   <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </SecondStageContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    {oitavas.map((team, index) => {
                        if(index >= 4){
                            return (
                                <StageItemContainer>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols}/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols}/>
                                    </div>
                                </StageItemContainer>
                            );
                        }
                    })}
                </FirstStageContainer>
            </StagesContainer>
        </FinalStageContainer>
    );
}