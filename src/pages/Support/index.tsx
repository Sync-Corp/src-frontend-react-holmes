import React from 'react';
import Header from '../../components/Header';

import banner from '../../assets/images/suporte-banner.svg';

import './styles.css';

function Support() {
    return (
        <>
            <Header page="support"/>

            <main className="support-container">
                <img src={banner} alt="Banner de Suporte"/>

                <form className="form-contato">
                    <h1>Nós queremos te ouvir.</h1>

                    <p>Sugestão, reclamação, pedido de ajuda ou até mesmo um elogio.<br />Sua opinião é importante!</p>

                    <input className="subject" type="text" placeholder="Assunto"/>

                    <textarea className="message" placeholder="Escreva sua mensagem aqui"/>

                    <button className="common-button" type="submit">Enviar</button>
                </form>
            </main>
        </>
    );
}

export default Support;