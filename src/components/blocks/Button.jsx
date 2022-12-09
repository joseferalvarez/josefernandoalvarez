import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 250px;
    padding: 30px;
    font-family: --montserrat;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.filled ? "var(--color-orange)" : "var(--color-dark)"};
    color: ${props => props.filled ? "var(--color-white)" : "var(--color-orange)"};
    border: ${props => props.filled ? "" : "1px solid var(--color-orange)"};
`;


const Button = ({ text, filled }) => {
    return (
        <ButtonStyled filled={filled}>{text}</ButtonStyled>
    );
}

export default Button;
