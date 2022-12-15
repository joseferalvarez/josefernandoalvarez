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

        emailjs.sendForm("service_rxv9xos", "template_uckeveo", form.current, "rLb6-2XqMVWz1y-A_");

        e.target.reset();
    }

    return (
        <ContactContainer id='contact'>
            <hr />
            <h2>Contacta conmigo</h2>

            <ContactData>
                <Email href='mailto:joseferalvarezromero@gmail.com' target='_blank' rel='noreferrer'>
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
