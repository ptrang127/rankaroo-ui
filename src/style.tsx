import { createGlobalStyle } from "styled-components";
import theme from "./shared/theme/index";

export default createGlobalStyle`
    html {
        background-color: ${theme.bg.darkPurple};
        color: ${theme.text.default};
    }

    body {
        font-family: "Jersey 15", sans-serif;
    }
`;