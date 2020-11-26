import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import registerBanner from '../../assets/images/register-banner.svg';

import './styles.css';
import HolmesModal from '../../components/HolmesModal';

function CreateAccount() {
    const history = useHistory();

    const [pessoaFisica, setPessoaFisica] = useState(false);
    const [pessoaJuridica, setPessoaJuridica] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [branch, setBranch] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [isModalVisible, setModalVisible] = useState(false);

    const holmesModal = HolmesModal({
        title: "É um prazer conhecê-lo.",
        message: "Sua conta foi cadastrada com sucesso! Agora é só fazer o Login.",
        buttonText: "Vamos lá!",
        setVisible: setModalVisible,
        confirmAction: () => {
            history.push('/login');
        }
    });

    async function handleRegister(e: FormEvent) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        const geralData = {
            name,
            email,
            password,
            file: {
                id: 1
            },
            type: pessoaFisica ? 'NATURAL' : 'JURIDICAL'
        };
        
        let user;

        try {
            if(pessoaFisica) {
                user = {...geralData, cpf}
    
                await api.post('/n-person', user)
            }
            else {
                user = {...geralData, cnpj, role: branch}
    
                await api.post('/j-person', user)
            }

            setModalVisible(true);

        } catch (err) {
            alert('Não foi possivel efeutuar o cadastro');
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            
            {isModalVisible && holmesModal}

            <main className="register-container">
                <img src={registerBanner} className="register-banner" alt="Mulher aguardando cadastro"/>

                <form onSubmit={handleRegister} className="register-form">
                    <h1>Crie sua conta</h1>

                    <p>Já tem uma conta? <strong><Link to="/login">Faça seu login.</Link></strong></p>

                    <div className="radio-container">
                        <span>
                            <input 
                            type="radio" 
                            id="rbFisica" 
                            name="cadastro" 
                            checked={pessoaFisica} 
                            onChange={e => {
                                setPessoaFisica(!pessoaFisica); 
                                if(pessoaFisica!==pessoaJuridica)
                                    setPessoaJuridica(!pessoaJuridica);
                            }}/>
                            <label htmlFor="rbFisica">Pessoa Física</label>
                        </span>
                        {pessoaFisica &&
                            <>
                               <input 
                                    type="text" 
                                    placeholder="Nome" 
                                    value={name} 
                                    onChange={event => setName(event.target.value)}
                                    required/>

                                <input 
                                    type="text" 
                                    placeholder="CPF" 
                                    value={cpf} 
                                    onChange={event => setCpf(event.target.value)}
                                    required/>

                                <input 
                                    type="email" 
                                    placeholder="E-mail" 
                                    value={email} 
                                    onChange={event => setEmail(event.target.value)}
                                    required/>

                                <div className="form-row">
                                    <input 
                                        type="password" 
                                        placeholder="Senha" 
                                        value={password} 
                                        onChange={event => setPassword(event.target.value)}
                                        required/>

                                    <input 
                                        type="password" 
                                        placeholder="Repetir Senha" 
                                        value={confirmPassword} 
                                        onChange={event => setConfirmPassword(event.target.value)}
                                        required/>
                                </div>
                            </>
                        }
                    </div>

                    <div className="radio-container">
                        <span>
                            <input 
                            type="radio" 
                            id="rbJuridica" 
                            name="cadastro" 
                            checked={pessoaJuridica} 
                            onChange={e => {
                                setPessoaJuridica(!pessoaJuridica); 
                                if(pessoaFisica!==pessoaJuridica)
                                    setPessoaFisica(!pessoaFisica);
                            }}/>
                            <label htmlFor="rbJuridica">Pessoa Jurídica</label>
                        </span>
                        {pessoaJuridica &&
                            <>
                                <input 
                                    type="text" 
                                    placeholder="Nome da Instituição" 
                                    value={name} 
                                    onChange={event => setName(event.target.value)}
                                    required/>

                                <div className="form-row">
                                    <input 
                                        type="text" 
                                        placeholder="CNPJ" 
                                        value={cnpj} 
                                        onChange={event => setCnpj(event.target.value)}
                                        required/>

                                    <input 
                                        type="text" 
                                        placeholder="Ramo da empresa" 
                                        value={branch} 
                                        onChange={event => setBranch(event.target.value)}
                                        required/>
                                </div>

                                <input 
                                    type="email" 
                                    placeholder="E-mail" 
                                    value={email} 
                                    onChange={event => setEmail(event.target.value)}
                                    required/>

                                <div className="form-row">
                                    <input 
                                        type="password" 
                                        placeholder="Senha" 
                                        value={password} 
                                        onChange={event => setPassword(event.target.value)}
                                        required/>

                                    <input 
                                        type="password" 
                                        placeholder="Repetir Senha" 
                                        value={confirmPassword} 
                                        onChange={event => setConfirmPassword(event.target.value)}
                                        required/>
                                </div>
                            </>
                        }
                    </div>

                    <span className="terms-row">
                        <input type="checkbox" id="cbTerms" required/>
                        <label htmlFor="cbTerms">Eu li e aceito os <span className="terms"><Link to="/">Termos e Condições</Link></span> do site.</label>
                    </span>

                    <button type="submit" className="icon-button">Cadastrar-se</button>
                </form>
            </main>
        </>
    );
}

export default CreateAccount;