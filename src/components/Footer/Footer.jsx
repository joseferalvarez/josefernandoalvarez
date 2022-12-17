import React from 'react';
import data from "../../db/profile.json";
import logo from "../../assets/icons/logodark.svg";

import {
    FooterContainer,
    SocialMedia,
    Logo
} from './FooterStyled';

const Footer = () => {
    return (
        <FooterContainer>
            <p>Contacta conmigo por tus redes sociales</p>
            <SocialMedia>
                {data.socialmedia.map((sn, index) => (
                    <a href={sn.link} key={index} target="_blank" rel='noreferrer'>
                        <svg width={sn.width} height={sn.height}>
                            {sn.icon.map((path, j) => (
                                <path d={path} fill="white" key={j}></path>
                            ))}
                        </svg>
                    </a>
                ))}
            </SocialMedia>
            <p>© Jose Fernando Álvarez Romero</p>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
        </FooterContainer>
    );
}

export default Footer;
