import React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Button from '../blocks/Button';

import {
    HeaderContainer,
    Logo,
    ButtonContainer
} from './HeaderStyled';

import logo from "../../assets/icons/logolight.svg";

import data from "../../db/profile.json";
import { profileImages } from '../../db/profile';


const Header = () => {

    return (
        <HeaderContainer id="home">
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Profile profile={data.profile} images={profileImages}></Profile>

            <ButtonContainer>
                <Button text="Descarga mi CV" filled></Button>
                <Button text="Contacta conmigo"></Button>
            </ButtonContainer>

            <AboutMe social={data.socialmedia} description={data.description}></AboutMe>
        </HeaderContainer>
    );
}

export default Header;
