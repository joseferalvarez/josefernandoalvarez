import styled from 'styled-components';

const PortfolioContainer = styled.div`
    margin: 50px auto 90px auto;
`;
const ProjectsList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
