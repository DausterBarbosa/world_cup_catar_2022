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

export default function FinalStage(){
    return (
        <FinalStageContainer>
            <FinalStageHeader>
                <img src={Logo} alt="logo"/>
                <button>INICIAR FASES FINAIS</button>
            </FinalStageHeader>
            <StagesContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </FirstStageContainer>
                <SecondStageContainer>
                    <StageTitle>QUARTAS DE FINAIS</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </SecondStageContainer>
                <ThirdStageContainer>
                    <StageTitle>SEMIFINAL</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </ThirdStageContainer>
                <ThirdStageContainer>
                    <StageTitle>SEMIFINAL</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </ThirdStageContainer>
                <SecondStageContainer>
                    <StageTitle>QUARTAS DE FINAIS</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </SecondStageContainer>
                <FirstStageContainer>
                    <StageTitle>OITAVAS DE FINAIS</StageTitle>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Ira</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Brasil</p>
                            <input/>
                        </div>
                        <div>
                            <p>Emirados</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                    <StageItemContainer>
                        <div>
                            <p>Estados Unidos</p>
                            <input/>
                        </div>
                        <div>
                            <p>Arábia Saudita</p>
                            <input/>
                        </div>
                    </StageItemContainer>
                </FirstStageContainer>
            </StagesContainer>
        </FinalStageContainer>
    );
}