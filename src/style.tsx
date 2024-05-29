import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import theme from "./shared/theme/index";

export default createGlobalStyle`
    html {
        background-color: ${theme.bg.darkPurple};
    }
`;