import React from 'react';
import StackCard from './StackCard';

import data from "../../db/stack.json";
import styled from 'styled-components';


const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Stack = () => {
    return (
        <StackContainer>
            {data.stack.map((stack) => (
                <StackCard stack={stack}></StackCard>
            ))}
        </StackContainer>
    );
}

export default Stack;
