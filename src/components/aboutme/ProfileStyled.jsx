import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: block;

    h1{
        color: white;
        font-family: var(--montserrat);
        font-size: 25px;
    }

    h2{
        color: var(--color-grey);
        font-family: var(--roboto);
        font-weight: 400;
    }

    @media only screen and (min-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;
    }
`;

const ProfileImage = styled.div`
    position: relative;
    max-width: 300px;
    max-height: 300px;
    margin: auto;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(0.5);
    }

    div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(35,35,35,0) 0%, rgba(35,35,35,0.50) 60%, rgba(35,35,35,0.70) 80%, rgba(35,35,35,1) 100%);
    }

    @media only screen and (min-width: 1000px) {
        margin: 0;
    }
`;

const ProfileVocation = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export { ProfileContainer, ProfileImage, ProfileVocation };
