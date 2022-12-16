import React from 'react';
import {
    AboutContainer,
    SocialMedia,
    VerticalLine,
    Description
} from './AboutMeStyled';
import { Title } from '../Blocks/Title';
import { Line } from '../Blocks/Line';


const AboutMe = ({ social, description }) => {

    return (
        <AboutContainer>

            <SocialMedia>
                {social.map((sn, i) => (
                    <>
                        <a href={sn.link} target="_blank" rel='noreferrer'>
                            <svg width={sn.width} height={sn.height}>
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
                <Title>{description.title}</Title>
                <Line />
                {description.text.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </Description>
        </AboutContainer>
    );
}

export default AboutMe;
