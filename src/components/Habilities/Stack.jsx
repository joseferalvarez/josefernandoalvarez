import React from 'react';
import StackCard from './StackCard';
import Libraries from './Libraries';

import {
    StackContainer,
    CardsContainer
} from './StackStyled';

import data from "../../db/stack.json";
import { Title } from '../Blocks/Title';
import { Line } from '../Blocks/Line';

const Stack = () => {
    return (
        <StackContainer id='stack'>
            <Line center />
            <Title center>Stack tecnológico</Title>
            <CardsContainer>
                {data.stack.map((stack) => (
                    <StackCard stack={stack}></StackCard>
                ))}
            </CardsContainer>
            <div>
                <Libraries libraries={data.libraries}></Libraries>
            </div>
        </StackContainer>
    );
}

export default Stack;
