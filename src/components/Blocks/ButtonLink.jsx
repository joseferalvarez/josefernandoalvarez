import React, { useState } from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a`
    max-width: 170px;
    width: 30%;
    padding: 20px;
    text-align: center;
    font-family: var(--montserrat);
    font-size: var(--button-size);
    font-weight: 500;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    border: ${props => props.filled ? "1px solid transparent" : "1px solid var(--color-orange)"};
    background-color: ${props => props.filled ? "var(--color-orange)" : "var(--color-dark)"};
    color: ${props => props.filled ? "var(--color-white)" : "var(--color-orange)"};
    cursor: default;
    transition: all 0.25s;

    &:hover{
        border: ${props => props.filled ? "1px solid var(--color-grey)" : "1px solid transparent"};
        background-color: #333333;
        color: var(--color-white);
    }
`;


const ButtonLink = ({ text, filled, url, noref }) => {

    const [refer,] = useState(!noref ? {
        target: "_black",
        rel: "noreferrer"
    } : "");

    return (
        <LinkStyled href={url} filled={filled} target={refer.target} rel={refer.rel}>{text}</LinkStyled>
    );
}

export default ButtonLink;
