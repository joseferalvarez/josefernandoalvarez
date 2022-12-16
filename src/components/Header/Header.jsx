import React from 'react';
import Profile from './Profile';
import AboutMe from './AboutMe';

import {
    HeaderContainer,
    Logo,
    ButtonContainer
} from './HeaderStyled';

import logo from "../../assets/icons/logolight.svg";

import data from "../../db/profile.json";
import { profileImages } from '../../db/profile';
import ButtonLink from '../blocks/ButtonLink';


const Header = () => {

    return (
        <HeaderContainer id="home">
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Profile profile={data.profile} images={profileImages}></Profile>

            <ButtonContainer>
                <ButtonLink url={data.profile.cv} text="Descarga mi CV" filled></ButtonLink>
                <ButtonLink url="#contact" text="Contacta conmigo" noref></ButtonLink>
            </ButtonContainer>

            <AboutMe social={data.socialmedia} description={data.description}></AboutMe>
        </HeaderContainer>
    );
}

export default Header;
