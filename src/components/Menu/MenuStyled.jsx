import styled from 'styled-components';

const MenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 10px 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media only screen and (min-width: 1000px) {
        width: 100px;
        height: 80%;
        margin: 5% 0;
        &:hover div{
            margin-left: 0;
        }
    }
`;

const Tab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    height: 80px;
    background-color: var(--color-dark-secondary);
    border-radius: 8px;

    hr{
        display: none;
    }

    @media only screen and (min-width: 1000px) {
        transition: margin 0.25s;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 80px;
        height: 70%;
        transition: margin 0.25s;
        margin-left: -140px;

        hr{
            display: block;
            width: 30%;
            border-radius: 12px;
            border: 1px solid #23232335;
        }
    }
`;

export {
    MenuContainer,
    Tab,

}
