import Styled from "styled-components";

export const HomeContainer = Styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

export const HomeHeader = Styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

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