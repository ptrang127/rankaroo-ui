/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import theme from "../../shared/theme";
import {
    Box, 
    List, 
    ListItem 
} from '@mui/material';

const navbarCss = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 0px',
})

const navLogoCss = css({
    fontSize: '48px',
    textTransform: 'uppercase',
    marginRight: 'auto'
})

const navItemsCss = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
})

const navItemCss = css({
    fontSize: '24px',
    display: 'inline-block',
    listStyleType: 'none',
    cursor: 'pointer',
    position: 'relative',

    '&:hover': {
        color: theme.text.link,
        textDecoration: 'underline',
    }
})

export function NavBar() {
    return (
        <div css={navbarCss}>
            <Box css={navLogoCss}>
                Rankaroo
            </Box>
            <Box>
                <List css={navItemsCss}>
                    <ListItem css={navItemCss}>
                        Insights
                    </ListItem>
                    <ListItem css={navItemCss}>
                        About
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}