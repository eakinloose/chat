import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'lato';
    }

    html, body{
        overflow-x: hidden;
        background: #fdfdfd;
        color: Black;
    }
`

export default GlobalStyles;