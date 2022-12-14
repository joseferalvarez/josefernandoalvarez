import React from 'react';
import styled from 'styled-components';
import data from "../../db/routes.json";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    transition: margin 0.25s;
    width: 80px;
    height: 70%;
    background-color: var(--color-dark-secondary);
    border-radius: 8px;
    margin-left: -140px;

    hr{
        width: 30%;
        border-radius: 12px;
        border: 1px solid #23232335;
    }
`;

const Menu = () => {

    console.log(data.home);

    return (
        <MenuContainer>
            <Tab>
                {data.home.map((route, index) => (
                    <>
                        <a href={route.route} key={index}>
                            <svg width={route.width} height={route.height}>
                                {route.icon.map((path, j) => (
                                    <path d={path} fill="white" key={j}></path>
                                ))}
                            </svg>
                        </a>
                        {index === data.home.length - 1 ? "" : <hr></hr>}
                    </>
                ))}
            </Tab>
        </MenuContainer>
    );
}

export default Menu;
