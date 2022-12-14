import React from 'react';
import email from "../../assets/icons/email.svg";

import {
    ContactContainer,
    ContactData,
    Email,
    Input,
    Message,
    SendButton
} from "./ContactStyled";

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <hr />
            <h2>Contacta conmigo</h2>

            <ContactData>
                <Email>
                    <img src={email} alt='' />
                    <div>
                        <p>EMAIL</p>
                        <p>Envíame un correo electrónico</p>
                    </div>
                </Email>

                <form>
                    <Input placeholder='Nombre completo'></Input>
                    <Input placeholder='Email'></Input>
                    <Message placeholder='Escribe tu mensaje'></Message>

                    <SendButton type="submit" value="Enviar"></SendButton>
                </form>
            </ContactData>

        </ContactContainer>
    );
}

export default Contact;
