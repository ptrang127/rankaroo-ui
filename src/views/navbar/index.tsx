// import NavLogo from "./components/NavLogo";
import { NavBarWrapper, NavLogo, NavItems, NavItem } from "./style";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavLogo>
                Rankaroo
            </NavLogo>
            <NavItems>
                <NavItem>
                    Insights
                </NavItem>
                <NavItem>
                    About Us
                </NavItem>
            </NavItems>
        </NavBarWrapper>
    );
};

export default NavBar;