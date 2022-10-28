import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #79083e;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;