import React from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import { Container, Logo, CalendarSearch, NavBarSt, Welcome, DropDown } from "./NavBar.styled";
import styled from "styled-components";

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

const NavBarSt = styled.div`
    background: var(--background);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    
`

const Container = styled.div`
    margin-left: 20vh;
    margin-right: 20vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 12%;
`

const CalendarSearch = styled.input`
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 12px 20px;
    border: 1px solid #F57F17;
    border-radius: 30px;
    background-color: white;
`

const Welcome = styled.span`
    display: flex;
    flex-direction: column;
    h3{
        color: #F57F17;
    }
    .caption{
        font-size: small;
    }
`

const DropDown = styled.div`
    display: flex;
    align-items: center;
    h1{
        font-size: large;
        margin-left: 8px;
    }
`

export default NavBar;