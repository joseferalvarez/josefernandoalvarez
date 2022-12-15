import React from 'react';
import styled from 'styled-components';
import data from "../../db/profile.json";
import logo from "../../assets/icons/logodark.svg";

const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-white);
    width: 100%;
    height: 250px;
    background-color: var(--color-orange);
    font-family: var(--montserrat);
    font-size: 0.8rem;

    p:first-child{
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1000px) {
        height: 150px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: 30px;
`;

const Logo = styled.div`
    display: none;

    @media only screen and (min-width: 1000px) {
        display: inline-block;
        position:absolute;
        bottom: 5px;
        right: 20px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>Contacta conmigo por tus redes sociales</p>
            <SocialMedia>
                {data.socialmedia.map((sn, i) => (
                    <a href={sn.link} target="_blank" rel='noreferrer'>
                        <svg width="35" height="35">
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
