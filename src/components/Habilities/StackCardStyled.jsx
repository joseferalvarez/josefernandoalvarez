import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid var(--color-grey);
    margin: 0 5%;
    border-radius: 8px;
    width: 90%;
    transition: all 0.2s;

    &:hover,
    &:hover hr{
        border: 1px solid var(--color-orange);
    }

    h3{
        font-family: var(--montserrat);
        color: var(--color-white);
        font-weight: 500;
        font-size: 1.2rem;
        text-align: center;
    }

    hr{
        border: 1px solid var(--color-grey);
        margin: 0 25%;
        border-radius: 8px;
    }

    @media only screen and (min-width: 1000px) {
        width: 25%;
        margin: 0;
    }
`;
const List = styled.div`
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

const Tech = styled.div`
    margin: 0 5%;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1000px) {
        margin: 0 85px 0 50px;
    }

    p{
        color: var(--color-white);
        font-family: var(--roboto);
        font-size: 0.85rem;
        display: block;
        margin: auto;
    }
`;

export {
    Card,
    List,
    Tech
}
