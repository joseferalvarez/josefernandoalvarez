import styled from 'styled-components';

const ContactContainer = styled.div`
    margin: 50px auto;
`;

const ContactData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;

    form{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    @media only screen and (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
        width: 75%;
        gap: 5%;

        form{
            width: 60%;
            margin: 0;
        }
    }
`;

const Email = styled.a`
    display: flex;
    width: 100%;
    align-self: flex-start;
    border: 1px solid var(--color-grey);
    border-radius: 8px;
    text-decoration: none;

    &:hover{
        border-color: var(--color-orange);
    }

    img{
        margin: 0 5%;
    }

    div p{
        color: var(--color-white);
        margin: 15px 0;
    }

    div p:first-child{
        font-size: 1.2rem;
        font-family: var(--montserrat);
    }
    div p:last-child{
        font-size: 1rem;
        font-family: var(--montserrat);
    }

    @media only screen and (min-width: 1000px) {
        height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30%;
        text-align: center;
        img{
            width: 20%;
        }
        div p:first-child{
            margin-top: 5px;
        }
    }
`;

const Input = styled.input`
    font-family: var(--montserrat);
    font-size: 1rem;
    color: var(--color-white);
    border: none;
    background-color: transparent;
    border: 1px solid var(--color-grey);
    border-radius: 8px;
    padding: 15px 0;
    width: 100%;

    &:focus{
        border: 1px solid var(--color-orange);
        outline: none;
    }

    @media only screen and (min-width: 1000px) {
        padding: 15px;
    }
`;

const Message = styled.textarea`
    font-family: var(--montserrat);
    font-size: 1rem;
    color: var(--color-white);
    border: none;
    background-color: transparent;
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    padding: 15px 0;
    width: 100%;
    height: 200px;

    &:focus{
        border: 1px solid var(--color-orange);
        outline: none;
    }

    @media only screen and (min-width: 1000px) {
        padding: 15px;
    }
`;

const SendButton = styled.input`
    transition: all 0.25s;
    width: 200px;
    padding: 25px;
    font-family: var(--montserrat);
    font-size: var(--button-size);
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background-color: var(--color-orange);
    color: var(--color-white);
    border: 1px solid var(--color-orange);
    align-self: flex-start;
    margin-top: 10px;

    &:hover{
        background-color: #333333;
        border: 1px solid var(--color-grey);
        color: var(--color-white);
    }

    @media only screen and (min-width: 1000px) {
        margin-left: -15px;
    }
`;

export {
    ContactContainer,
    ContactData,
    Email,
    Input,
    Message,
    SendButton
}
