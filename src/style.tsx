import { createGlobalStyle } from "styled-components";
import theme from "./shared/theme/index";
import styled from "styled-components";

export default createGlobalStyle`
    html {
        background-color: ${theme.bg.darkPurple};
        color: ${theme.text.default};
    }

    body {
        font-family: "Jersey 15", sans-serif;
        margin: 0;
    }
`;

export const Container = styled.div`
    margin: 0px 48px;
`