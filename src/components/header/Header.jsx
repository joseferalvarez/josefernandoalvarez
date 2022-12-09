import React from 'react';
import Profile from './Profile';
import logo from "../../assets/icons/logolight.svg";
import styled from 'styled-components';
import Button from '../blocks/Button';
import AboutMe from './AboutMe';

import data from "../../db/profile.json";

const HeaderContainer = styled.div``;
const Logo = styled.div`
    display: block;
    margin: 20px 0 0 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-top: 50px;

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        gap: 100px;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Profile profile={data.profile}></Profile>

            <ButtonContainer>
                <Button text="Descarga mi CV" filled></Button>
                <Button text="Contacta conmigo"></Button>
            </ButtonContainer>

            <AboutMe social={data.socialmedia} description={data.description}></AboutMe>
        </HeaderContainer>
    );
}

export default Header;
