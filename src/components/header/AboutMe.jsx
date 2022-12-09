import React from 'react';
import {
    AboutContainer,
    SocialMedia,
    VerticalLine,
    Description
} from './AboutMeStyled';


const AboutMe = ({ social, description }) => {


    return (
        <AboutContainer>

            <SocialMedia>

                {social.map((sn, index) => (
                    <>
                        <a href={sn.link}>
                            <svg width="35" height="35">
                                {sn.icon.map((path) => (
                                    <path d={path} fill="white"></path>
                                ))}
                            </svg>
                        </a>
                        {index === (social.length - 1) ? <VerticalLine long /> : <VerticalLine />}
                    </>
                ))}

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
