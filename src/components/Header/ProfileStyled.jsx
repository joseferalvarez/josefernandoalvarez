import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: block;

    h1{
        color: white;
        font-family: var(--montserrat);
        font-size: 1.3rem;
        text-align: center;
    }

    h2{
        color: var(--color-grey);
<<<<<<< HEAD
        font-size: 1.25rem;
=======
        font-size: 1rem;
>>>>>>> develop
        font-family: var(--montserrat);
        font-weight: 400;
    }

    @media only screen and (min-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ProfileImage = styled.div`
    position: relative;
    max-width: 250px;
    max-height: 250px;
    margin: auto;
    overflow: hidden;

    img,
    div{
        width: 100%;
        height: 100%;
    }

    img{
        object-fit: cover;
        scale: 1.3;
    }

    div{
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(35,35,35,0) 0%, rgba(35,35,35,0.50) 50%, rgba(35,35,35,0.70) 70%, rgba(35,35,35,1) 90%);
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

export {
    ProfileContainer,
    ProfileImage,
    ProfileVocation
};
