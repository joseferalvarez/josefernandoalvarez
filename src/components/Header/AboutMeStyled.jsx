import styled from 'styled-components';

const AboutContainer = styled.div`
    padding-top: 30px;
    display: flex;
    margin: 5%;
    gap: 10%;

    @media only screen and (min-width: 1000px) {
        margin: 0 25%;
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
    p{
        font-family: var(--montserrat);
        color: var(--color-white);
        line-height: 1.6rem;
    }
`;

export {
    AboutContainer,
    SocialMedia,
    VerticalLine,
    Description
};
