import React from 'react';
import data from "../../db/routes.json";
import {
    MenuContainer,
    Tab
} from './MenuStyled';


const Menu = () => {

    return (
        <MenuContainer>
            <Tab>
                {data.home.map((route, index) => (
                    <React.Fragment key={index}>
                        <a href={route.route}>
                            <svg width={route.width} height={route.height}>
                                {route.icon.map((path, j) => (
                                    <path d={path} fill="white" key={j}></path>
                                ))}
                            </svg>
                        </a>
                        {index === data.home.length - 1 ? "" : <hr></hr>}
                    </React.Fragment>
                ))}
            </Tab>
        </MenuContainer>
    );
}

export default Menu;
