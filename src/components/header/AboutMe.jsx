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
                {social.map((sn, i) => (
                    <>
                        <a href={sn.link}>
                            <svg width="35" height="35">
                                {sn.icon.map((path, j) => (
                                    <path d={path} fill="white" key={j}></path>
                                ))}
                            </svg>
                        </a>
                        {i === (social.length - 1) ? <VerticalLine long /> : <VerticalLine />}
                    </>
                ))}
            </SocialMedia>

            <Description>
                <h2>{description.title}</h2>
                <hr />
                {description.text.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </Description>
        </AboutContainer>
    );
}

export default AboutMe;
