import styled from 'styled-components';

const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-white);
    width: 100%;
    height: 250px;
    background-color: var(--color-orange);
    font-family: var(--montserrat);
    font-size: 0.7rem;

    p:first-child{
        font-size: var(--text-size)
    }

    @media only screen and (min-width: 1000px) {
        height: auto;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: 40px;
`;

const Logo = styled.div`
    display: none;

    @media only screen and (min-width: 1000px) {
        display: inline-block;
        position:absolute;
        bottom: 5px;
        right: 20px;
    }
`;

export {
    FooterContainer,
    SocialMedia,
    Logo
}
