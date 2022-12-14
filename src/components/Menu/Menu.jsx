import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    position: fixed;
    width: 100px;
    margin: 3% 0;
    height: 80%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &:hover div{
        margin-left: 0;
    }
`;

const Tab = styled.div`
    transition: margin 0.25s;
    width: 80px;
    height: 70%;
    background-color: #333333;
    border-radius: 8px;
    margin-left: -140px;
`;

const Menu = () => {

    return (
        <MenuContainer>
            <Tab>
            </Tab>
        </MenuContainer>
    );
}

export default Menu;
