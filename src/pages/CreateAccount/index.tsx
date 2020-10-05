import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import registerBanner from '../../assets/images/register-banner.svg';

import './styles.css';

function CreateAccount() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [institutionType, setInstitutionType] = useState('');
    const [cnpj, setCnpj] = useState('');

    async function handleRegister(e: FormEvent) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        const user = {
            name,
            email,
            password,
            institutionName,
            institutionType,
            cnpj
        };

        try {
            await api.post('/users', user);

            history.push("/login");
        } catch (err) {
            alert('Não foi possivel efeutuar o cadastro');
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            
            <main className="register-container">
                <img src={registerBanner} className="register-banner" alt="Mulher aguardando cadastro"/>

                <form onSubmit={handleRegister} className="register-form">
                    <h1>Crie sua conta</h1>

                    <p>Já tem uma conta? <strong><Link to="/login">Faça seu login.</Link></strong></p>

                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={name} 
                        onChange={event => setName(event.target.value)}
                        required/>

                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                        required/>

                    <input 
                        type="text" 
                        placeholder="Nome da instituição" 
                        value={institutionName} 
                        onChange={event => setInstitutionName(event.target.value)}
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
                            placeholder="Tipo de Instituição" 
                            value={institutionType} 
                            onChange={event => setInstitutionType(event.target.value)}
                            required/>    
                    </div>         

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