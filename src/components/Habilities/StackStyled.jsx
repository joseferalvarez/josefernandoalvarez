import styled from 'styled-components';

const StackContainer = styled.div`
    display: block;
    margin: 100px auto;
    font-family: var(--montserrat);
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 70px;
`;

export {
    StackContainer,
    CardsContainer
}
