import Styled from "styled-components";

export const FinalStageContainer = Styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

export const FinalStageHeader = Styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        height: 120px;
    }

    button {
        background: #f73861;
        border: none;
        padding: 15px;
        border-radius: 15px;
        cursor: pointer;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;

        &:hover{
            background: #e9355b;
        }
    }
`;

export const StagesContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

export const StageItemContainer = Styled.div`
    background: #ffc400;
    padding: 3px;
    border-radius: 15px;
    width: 175px;

    div {
        display: flex;
        align-items: center;
        background: #FFF;
        border-radius: 15px;
        padding: 5px 10px;
        justify-content: center;

        p {
            color: #770d2a;
            font-weight: bold;
            font-size: 15px;
            width: 100%;
            text-align: center;
        }

        input {
            width: 30px;
            height: 30px;
            border: 2px solid #770d2a;
            border-radius: 7px;
            text-align: center;
            font-size: 17px;
            margin-left: 5px;
        }
    }

    div + div {
            margin-top: 3px;
    }

    & + & {
        margin-top: 40px;
    }
`;

export const StageTitle = Styled.p`
    color: #FFF;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
`;

export const FirstStageContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SecondStageContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ThirdStageContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;