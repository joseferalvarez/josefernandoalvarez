import React from 'react';
import ButtonLink from "../blocks/ButtonLink";

import {
    ProjectContainer,
    DataContainer,
    Text,
    Links
} from './ProjectStyled';



const Project = ({ project, image }) => {
    return (
        <ProjectContainer>
            <img src={image} alt="" />

            <DataContainer>
                <Text>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </Text>
                <Links>
                    {project.page ? <ButtonLink text="Página web" url={project.page} filled></ButtonLink> : ""}
                    {project.github ? <ButtonLink text="Repositorio" url={project.github}></ButtonLink> : ""}
                </Links>
            </DataContainer>
        </ProjectContainer >
    );
}

export default Project;
