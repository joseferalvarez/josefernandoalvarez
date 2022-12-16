import styled from 'styled-components';

const StackContainer = styled.div`
    display: block;
    margin: 100px auto;
    font-family: var(--montserrat);

    h2{
        text-align: center;
        margin: 50px;
    }

    hr{
        border-radius: 8px;
        color: var(--color-grey);
        margin: 0 25%;
    }
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
