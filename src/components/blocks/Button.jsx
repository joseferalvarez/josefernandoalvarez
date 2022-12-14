import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    transition: all 0.25s;
    width: 250px;
    padding: 25px;
    font-family: --montserrat;
    font-size: 1.25rem;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.filled ? "var(--color-orange)" : "var(--color-dark)"};
    color: ${props => props.filled ? "var(--color-white)" : "var(--color-orange)"};
    border: ${props => props.filled ? "" : "1px solid var(--color-orange)"};

    &:hover{
        background-color: #333333;
        border: ${props => props.filled ? "1px solid var(--color-grey)" : "1px solid transparent"};
        color: var(--color-white);
    }
`;


const Button = ({ text, filled }) => {
    return (
        <ButtonStyled filled={filled}>{text}</ButtonStyled>
    );
}

export default Button;
