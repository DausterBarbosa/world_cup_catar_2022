import Styled from "styled-components";

export const LoadingPage = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const HomeContainer = Styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeHeader = Styled.header`
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

export const GroupsContainer = Styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    row-gap: 60px;
    width: 100%;
`;

export const Group = Styled.div`
    width: 250px;
    background: #ffc400;
    padding: 3px;
    border-radius: 17px;
    position: relative;
`;

export const GroupItem = Styled.div`
    background: #FFF;
    color: #770d2a;
    font-weight: bold;
    padding: 10px 15px;
    font-size: 18px;

    & + & {
        margin-top: 3px;
    }

    &:nth-child(2) {
        border-radius: 15px 15px 0 0;
    }

    &:nth-child(5) {
        border-radius: 0 0 15px 15px;
    }
`;

export const GroupTitle = Styled.div`
    position: absolute;
    background: #ffc400;
    font-weight: bold;
    padding: 10px;
    border-radius: 15px 15px 0 0;
    top: -35px;
    left: 10px;
    color: #770d2a;
    font-size: 16px;
`;

export const ResultsTitle = Styled.div`
    color: #FFF;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    margin: 40px 0 40px 0;
`;

export const ResultsContainer = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    row-gap: 20px;
    width: 100%;
`;

export const GroupResultContainer = Styled.div`
    background: #ffc400;
    padding: 3px;
    border-radius: 15px;
    width: 400px;
`;

export const GroupResultContainerTitle = Styled.div`
    color: #770d2a;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    text-align: center;
`;

export const GroupResultContainerItem = Styled.div`
    display: flex;
    background: #FFF;
    align-items: center;
    justify-content: center;
    padding: 10px;

    & + & {
        margin-top: 3px;
    }

    &:nth-child(7) {
        border-radius: 0 0 15px 15px;
    }

    p {
        color: #770d2a;
        font-weight: bold;
        font-size: 18px;
        width: 100%;
        text-align: right;
    }

    input {
        width: 40px;
        height: 40px;
        border: 2px solid #770d2a;
        border-radius: 7px;
        text-align: center;
        font-size: 20px;
    }

    input + input {
        margin-left: 10px;
    }

    input + p {
        margin-left: 10px;
        text-align: left;
    }

    p + input {
        margin-left: 10px;
    }
`;

export const ClassificadosTable = Styled.table`
    background: #FFF;
    color: #770d2a;
    font-weight: bold;
    font-size: 16px;
    width: 700px;
    border-collapse: collapse;
    border-radius: 20px;
    overflow: hidden;
`;

export const ClassificadosTableHeader = Styled.tr`
    background: #ffc400;

    th{
        font-size: 18px;
        font-weight: bold;
        padding: 10px;
    }
`;

export const ClassificadosRow = Styled.tr`
    border-top: 3px solid #ffc400;
`;

export const ClassificadosCel = Styled.td`
    padding: 7px;
    text-align: center;
`;

export const NextStepButton = Styled.button`
    background: #f73861;
    border: none;
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
    margin: 30px 0;

    &:hover{
        background: #e9355b;
    }
`;