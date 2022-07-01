import React from "react";
import { Container, Logo, CalendarSearch, NavBarSt, Welcome } from "./NavBar.styled";

const NavBar: React.FC = () => {
    return (
        <NavBarSt>
            <Container>
                <Logo src="\Assets\Logo.png" />
                <CalendarSearch placeholder="Search" />
                <Welcome>
                    <p className="caption">Welcome</p>
                    <h3>lorem ipsum</h3>
                </Welcome>
            </Container>
        </NavBarSt>

    )
}

export default NavBar;