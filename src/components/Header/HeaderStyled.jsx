import styled from 'styled-components';

const HeaderContainer = styled.div``;
const Logo = styled.div`
    display: block;
    margin: 10px 0 0 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 40px 0;

    a{
        text-decoration: none;
    }

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        gap: 50px;
    }
`;

export {
    HeaderContainer,
    Logo,
    ButtonContainer
};
