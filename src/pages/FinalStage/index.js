import {useState} from "react";

import {useLocation} from "react-router-dom";

import Axios from "../../utils/axios";

import {
    FinalStageContainer,
    FinalStageHeader,
    StagesContainer,
    StageItemContainer,
    StageTitle,
    FirstStageContainer,
    SecondStageContainer,
    ThirdStageContainer,
    FourtStage,
} from "./styles";

import LoadLogo from "../../assets/images/loadLogo.png";

import Logo from "../../assets/images/logo.png";

import FinalStages from "../../services/FinalStages";
import FinalStagesClassification from "../../services/FinalStagesClassification";

export default function FinalStage(){
    const {state} = useLocation();

    const [startStages, setStartStages] = useState(false);

    const [oitavas, setOitavas] = useState(state.teams);
    const [quartas, setQuartas] = useState([]);
    const [semi, setSemi] = useState([]);
    const [final, setFinal] = useState([]);

    async function StartFinalStages(){
        const resultOitavas = FinalStages(state.teams);
        setOitavas(resultOitavas);
        const classificadosQuartas = FinalStagesClassification(resultOitavas);
        const resultQuartas = FinalStages(classificadosQuartas);
        setQuartas(resultQuartas);
        const classificadosSemi = FinalStagesClassification(resultQuartas);
        const resultSemi = FinalStages(classificadosSemi);
        setSemi(resultSemi);
        const classificadosFinal = FinalStagesClassification(resultSemi);
        const resultFinal = FinalStages(classificadosFinal);
        setFinal(resultFinal);
        setStartStages(true);

        await Axios.post("/WorldCup/InsertFinalResult", {
            "equipeA": resultFinal[0][0].Token,
            "equipeB": resultFinal[0][1].Token,
            "golsEquipeA": resultFinal[0][0].gols,
            "golsEquipeB": resultFinal[0][1].gols,
            "golsPenaltyTimeA": 0,
            "golsPenaltyTimeB": 0, 
        });
    }

    return (
        <FinalStageContainer>
            <FinalStageHeader>
                <img src={Logo} alt="logo"/>
                <button disabled={startStages} onClick={StartFinalStages}>INICIAR FASES FINAIS</button>
            </FinalStageHeader>
            <StagesContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    {oitavas.map((team, index) => {
                        if(index < 4){
                            return (
                                <StageItemContainer key={index}>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        {startStages === true && <input value={team[0].gols} readOnly/>}
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        {startStages === true && <input value={team[1].gols} readOnly/>}
                                    </div>
                                </StageItemContainer>
                            );
                        } else {
                            return <></>
                        }
                    })}
                </FirstStageContainer>
                <SecondStageContainer>
                    {quartas.length !== 0 && <StageTitle>QUARTAS DE FINAIS</StageTitle>}
                    {quartas.map((team, index) => {
                        if(index < 2){
                            return (
                                <StageItemContainer key={index}>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols} readOnly/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols} readOnly/>
                                    </div>
                                </StageItemContainer>
                            );
                        } else {
                            return <></>
                        }
                    })}
                </SecondStageContainer>
                <ThirdStageContainer>
                    {semi.length !== 0 && <StageTitle>SEMIFINAL</StageTitle>}
                    {semi.map((team, index) => {
                        if(index < 1){
                            return (
                                <StageItemContainer key={index}>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols} readOnly/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols} readOnly/>
                                    </div>
                                </StageItemContainer>
                            );
                        } else {
                            return <></>
                        }
                    })}
                </ThirdStageContainer>
                {startStages === false && <img src={LoadLogo} alt="loadlogo"/>}
                <ThirdStageContainer>
                    {semi.length !== 0 && <StageTitle>SEMIFINAL</StageTitle>}
                    {semi.map((team, index) => {
                        if(index >= 1){
                            return (
                                <StageItemContainer key={index}>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols} readOnly/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols} readOnly/>
                                    </div>
                                </StageItemContainer>
                            );
                        }else {
                            return <></>
                        }
                    })}
                </ThirdStageContainer>
                <SecondStageContainer>
                    {quartas.length !== 0 && <StageTitle>QUARTAS DE FINAIS</StageTitle>}
                    {quartas.map((team, index) => {
                        if(index >= 2){
                            return (
                                <StageItemContainer key={index}>
                                   <div>
                                        <p>{team[0].Name}</p>
                                        <input value={team[0].gols} readOnly/>
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        <input value={team[1].gols} readOnly/>
                                    </div>
                                </StageItemContainer>
                            );
                        }else {
                            return <></>
                        }
                    })}
                </SecondStageContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    {oitavas.map((team, index) => {
                        if(index >= 4){
                            return (
                                <StageItemContainer key={index}>
                                    <div>
                                        <p>{team[0].Name}</p>
                                        {startStages === true && <input value={team[0].gols} readOnly/>}
                                    </div>
                                    <div>
                                        <p>{team[1].Name}</p>
                                        {startStages === true && <input value={team[1].gols} readOnly/>}
                                    </div>
                                </StageItemContainer>
                            );
                        }else {
                            return <></>
                        }
                    })}
                </FirstStageContainer>
                <FourtStage>
                    {final.length !== 0 && (
                        <>
                            <StageTitle>FINAL</StageTitle>
                            <StageItemContainer>
                            <div>
                                <p>{final[0][0].Name}</p>
                                {startStages === true && <input value={final[0][0].gols} readOnly/>}
                            </div>
                            <div>
                                <p>{final[0][1].Name}</p>
                                {startStages === true && <input value={final[0][1].gols} readOnly/>}
                            </div>
                            </StageItemContainer>
                        </>
                    )}
                </FourtStage>
            </StagesContainer>
        </FinalStageContainer>
    );
}