import React from 'react';
import {
    AboutContainer,
    SocialMedia,
    VerticalLine,
    Description
} from './AboutMeStyled';


const AboutMe = ({ social, description }) => {

    console.log(description.text)

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
                <h2>{description.title}</h2>
                <hr />
                {description.text.map((p) => (
                    <p>{p}</p>
                ))}
            </Description>
        </AboutContainer>
    );
}

export default AboutMe;
