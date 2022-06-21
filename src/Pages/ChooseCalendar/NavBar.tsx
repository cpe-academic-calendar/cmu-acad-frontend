import React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {

    const Container = styled.div`
        margin: 20px;
        display: flex;
        justify-content: space-between;
        font-family: 'Poppins', sans-serif;
    `

    return (
        <Container>
            <p>Hello</p>
            <p>world</p>
        </Container>
    )
}

export default NavBar;