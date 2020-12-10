import React from 'react';
import Header from '../../components/Header';

import downloadBanner from '../../assets/images/download-banner.svg';
import downloadIcon from '../../assets/icons/download-icon.svg';

import './styles.css';
import { useHistory } from 'react-router-dom';

function Download() {
    const history = useHistory();

    function openInstaller() {
        window.open('ms-appinstaller:?source=file:///X:/Users/alexf/Documentos/GitHub/src-frontend-react-holmes/src/pages/Download/HolmesMSIX_1.0.5.0_Debug_Test/HolmesMSIX_1.0.5.0_x64_Debug.msixbundle', '_self');
    }

    return (
        <>
            <Header page="download"/>

            <main className="download-container">
                <img src={downloadBanner} alt="Homem pegando pacotes"/>

                <div>
                    <h1>Faça download e aproveite o Holmes!</h1>

                    <p>
                        Agora é só entrar com sua conta no nosso programa. 
                        Quando o pagamento for creditado, você terá acesso a todas as suas funcionalidades.
                    </p>

                    <button onClick={openInstaller}>
                        <img src={downloadIcon} alt="ícone de download"/><p>Download</p>
                    </button>
                </div>
            </main>
        </>
    );
}

export default Download;