import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a`
    transition: all 0.25s;
    width: 30%;
    min-width: 180px;
    text-align: center;
    padding: 25px;
    font-family: --montserrat;
    font-size: 1.25rem;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.filled ? "var(--color-orange)" : "var(--color-dark)"};
    color: ${props => props.filled ? "var(--color-white)" : "var(--color-orange)"};
    border: ${props => props.filled ? "1px solid transparent" : "1px solid var(--color-orange)"};
    text-decoration: none;

    &:hover{
        background-color: #333333;
        border: ${props => props.filled ? "1px solid var(--color-grey)" : "1px solid transparent"};
        color: var(--color-white);
    }
`;


const Button = ({ text, filled, url }) => {
    return (
        <LinkStyled href={url} filled={filled} target="_blank" rel='noreferrer'>{text}</LinkStyled>
    );
}

export default Button;
