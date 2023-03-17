import React from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ProfileOption from "./ProfileOption";
import styled from "styled-components";
import { useContext } from "react";
import ChooseCalendarContext from "../Context/ChooseCalendarContext";
import { Navigate } from "react-router-dom";

const NavBar: React.FC = () => {
    const [profileOption, setProfileOption] = React.useState(false);
    const { search, setSearch } = useContext(ChooseCalendarContext);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)
    }, [])

    const refOne = React.useRef<HTMLDivElement | null>(null)
    const handleClickOutSide = (e: any) => {
        if (refOne.current != null) {
            if (!refOne.current?.contains(e.target)) {
                setProfileOption(false)
            }
        }
    }

    return (
        <NavBarSt>
            <Container>
                <Logo src="\Assets\Logo.png" />
                <CalendarSearch placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <RightSide>
                    <Welcome>
                        <span>
                            <p className="caption">ยินดีต้อนรับ</p>
                            <h3>lorem ipsum</h3>
                        </span>
                    </Welcome>
                    <h1 onClick={() => setProfileOption(true)}><KeyboardArrowDownOutlinedIcon /></h1>
                    {profileOption && 
                <DropDown ref={refOne}>
                    <ProfileOption />
                </DropDown>}
                </RightSide>
            </Container>
        </NavBarSt>

    )
}

const DropDown = styled.div`
    position: absolute;
    width: 312px;
`

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
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 12px 12px;
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

const RightSide = styled.div`
    display: flex;
    align-items: center;
`

export default NavBar;