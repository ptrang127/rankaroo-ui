/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import theme from "../../shared/theme";

const navbarCss = {
    self: css({
        padding: '24px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    })
}

const navLogoCss = css({
    fontSize: '48px',
    textTransform: 'uppercase',
})

const navItemsCss = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const navItemCss = css({
    margin: '0px 12px',
    fontSize: '24px',
    listStyleType: 'none',
    cursor: 'pointer',

    '&:hover': {
        color: theme.text.link,
        textDecoration: 'underline',
    }
})

export function NavBar() {
    return (
        <div css={navbarCss.self}>
            <div css={navLogoCss}>
                Rankaroo
            </div>
            <ul css={navItemsCss}>
                <li css={navItemCss}>
                    Insights
                </li>
                <li css={navItemCss}>
                    About Us
                </li>
            </ul>
        </div>
    )
}