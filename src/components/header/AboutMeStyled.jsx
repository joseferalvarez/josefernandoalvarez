import styled from 'styled-components';

const AboutContainer = styled.div`
    padding-top: 50px;
    display: flex;
    margin: 5%;
    gap: 10%;

    @media only screen and (min-width: 1000px) {
        padding-top: 50px;
        margin: 0 27%;
        flex-direction: row;
        justify-content: center;
        gap: 100px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

const VerticalLine = styled.div`
    width: 3px;
    height: ${props => props.long ? "50px" : "20px"};
    border-radius: 8px;
    background-color: var(--color-grey);
`;

const Description = styled.div`
    h2{
        font-family: var(--montserrat);
        font-size: 30px;
        font-weight: 500;
        color: var(--color-white);
        margin: 0;
    }

    hr{
        border-radius: 8px;
        color: var(--color-grey);
    }

    p{
        font-family: var(--roboto);
        font-size: 20px;
        font-weight: 400px;
        color: var(--color-white);
    }
`;

export { AboutContainer, SocialMedia, VerticalLine, Description };
