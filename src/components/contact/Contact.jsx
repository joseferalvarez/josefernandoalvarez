import React, { useRef } from 'react';
import email from "../../assets/icons/email.svg";
import emailjs from '@emailjs/browser';

import {
    ContactContainer,
    ContactData,
    Email,
    Input,
    Message,
    SendButton
} from "./ContactStyled";

const Contact = () => {

    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);

        e.target.reset();
    }

    return (
        <ContactContainer id='contact'>
            <hr />
            <h2>Contacta conmigo</h2>

            <ContactData>
                <Email href={process.env.REACT_APP_EMAIL} target='_blank' rel='noreferrer'>
                    <img src={email} alt='' />
                    <div>
                        <p>EMAIL</p>
                        <p>Envíame un correo electrónico</p>
                    </div>
                </Email>

                <form ref={form} onSubmit={sendForm}>
                    <Input placeholder='Nombre completo' name='name'></Input>
                    <Input placeholder='Email' name='email'></Input>
                    <Message placeholder='Escribe tu mensaje' name='message'></Message>

                    <SendButton type="submit" value="Enviar"></SendButton>
                </form>
            </ContactData>

        </ContactContainer>
    );
}

export default Contact;
