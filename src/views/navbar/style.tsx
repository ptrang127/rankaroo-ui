import theme from '../../shared/theme/index'
import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    margin: 0px;
    padding: 24px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLogo = styled.div`
    font-size: 48px;
    text-transform: uppercase;
`

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: ${theme.bg.mediumPurple};
`

export const NavItem = styled.li`
    margin: 0px 12px;
    font-size: 24px;
    list-style-type: none;
    cursor: pointer;

    &:hover {
        color: ${theme.text.link};
        text-decoration: underline;
    }
`
