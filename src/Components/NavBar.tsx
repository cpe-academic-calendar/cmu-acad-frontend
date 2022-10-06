import React from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Container, Logo, CalendarSearch, NavBarSt, Welcome, DropDown } from "./NavBar.styled";

const NavBar: React.FC = () => {
    return (
        <NavBarSt>
            <Container>
                <Logo src="\Assets\Logo.png" />
                <CalendarSearch placeholder="Search" />
                <DropDown>
                    <Welcome>
                        <span>
                            <p className="caption">ยินดีต้อนรับ</p>
                            <h3>lorem ipsum</h3>
                        </span>
                    </Welcome>
                    <h1><KeyboardArrowDownOutlinedIcon /></h1>
                </DropDown>
            </Container>
        </NavBarSt>

    )
}

export default NavBar;