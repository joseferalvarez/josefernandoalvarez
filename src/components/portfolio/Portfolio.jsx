import React from 'react';
import Project from './Project';
import {
    PortfolioContainer,
    ProjectsList
} from "./PortfolioStyled";

import data from "../../db/portfolio.json";
import { projectImages } from "../../db/portfolio.js";


const Portfolio = () => {
    return (
        <PortfolioContainer>
            <hr />
            <h2>Portfolio</h2>
            <ProjectsList>
                {data.map((project, index) => (
                    <Project project={project} image={projectImages.images[index]}></Project>
                ))}
            </ProjectsList>
        </PortfolioContainer>
    );
}

export default Portfolio;
