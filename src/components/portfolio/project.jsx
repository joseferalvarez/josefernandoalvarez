import React from 'react';

import data from "../../db/portfolio.json";
import { projectImages } from "../../db/portfolio.js";
import styled from 'styled-components';

const ProjectContainer = styled.div`
    position: relative;
    width: 30%;
    height: 350px;
    border-radius: 8px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const DataContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    border: 1px solid var(--color-orange);
    background: linear-gradient(143deg, rgba(35,35,35,0.70) 0%, rgba(35,35,35,0.80) 20%, rgba(35,35,35,0.90) 50%, rgba(35,35,35,1) 80%);
`;

const Text = styled.div`
    display: flex;
`;

const Project = () => {
    return (
        <ProjectContainer>
            <img src={projectImages.images[0]} alt="" />

            <DataContainer>
                <Text>
                    <h3>{data[0].name}</h3>
                    <p>{data[0].description}</p>
                </Text>
                <p>{data[0].github}</p>
                <p>{data[0].page}</p>
            </DataContainer>
        </ProjectContainer>
    );
}

export default Project;
