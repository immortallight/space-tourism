import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body{
    margin: 0;
    padding: 0;
}
*:: after, *::before{
    box-sizing: border-box;
}
body{
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
}
.banner{
    font-size: 80px;
}
.ninja-icon{
    font-size: 100px;
}

`