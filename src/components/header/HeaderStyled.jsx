import styled from 'styled-components';

const HeaderContainer = styled.div``;
const Logo = styled.div`
    display: block;
    margin: 20px 0 0 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-top: 50px;

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        gap: 100px;
    }
`;

export {
    HeaderContainer,
    Logo,
    ButtonContainer
};
