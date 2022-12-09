import React from 'react';
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";

import { AboutContainer, SocialMedia, VerticalLine, Description } from './AboutMeStyled';
const AboutMe = () => {
    return (
        <AboutContainer>
            <SocialMedia>
                <a href="#"><img src={linkedin} alt="" /></a>
                <VerticalLine />
                <a href="#"><img src={github} alt="" /></a>
                <VerticalLine />
                <a href="#"><img src={instagram} alt="" /></a>
                <VerticalLine long />
            </SocialMedia>
            <Description>
                <h2>Sobre mi</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Description>
        </AboutContainer>
    );
}

export default AboutMe;
