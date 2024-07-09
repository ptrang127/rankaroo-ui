import { css } from '@emotion/react'
import theme from '../shared/theme'

export const globalStyles = css`
    html,
    body {
        margin: 0;
        height: 100%;
        font-family: "Jersey 15", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.bg.darkPurple};
        color: ${theme.text.default};
    }
`