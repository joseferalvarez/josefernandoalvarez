import styled from 'styled-components';

const ProjectContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 8px;

    &:hover div{
        opacity: 1;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const DataContainer = styled.div`
    transition: opacity 200ms;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    border: 1px solid var(--color-orange);
    background: linear-gradient(0deg, rgba(35,35,35,0.80) 0%, rgba(35,35,35,0.85) 20%, rgba(35,35,35,0.90) 50%, rgba(35,35,35,1) 80%);
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 50%;

    h3{
        font-family: var(--montserrat);
        color: var(--color-white);
        font-size: 1.87rem;
        margin: 5% 0 3% 0;;
    }

    p{
        color: var(--color-grey);
        font-size: 1.5rem;
        font-family: var(--roboto);
        margin: 0;
    }
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 40%;
    gap: 5%;
    justify-content: center;
    align-items: flex-end;
`;

export {
    ProjectContainer,
    DataContainer,
    Text,
    Links
}
