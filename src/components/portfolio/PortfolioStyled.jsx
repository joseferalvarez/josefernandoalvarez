import styled from 'styled-components';

const PortfolioContainer = styled.div`
    margin: 100px auto;

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
const ProjectsList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 0 5%;

    @media only screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;

export {
    PortfolioContainer,
    ProjectsList
}
