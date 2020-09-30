import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import secureLogin from '../../assets/images/secure-login.svg';

import './styles.css'

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        const loginObject = {
            email,
            password
        }

        try {
            const user = await api.post('/authenticate', loginObject);

            localStorage.setItem('session', user.data.token); 

            history.push('/choose-plan');
        } catch (err) {
            alert('Usuario ou senha incorretos');
        }
    }
    
    return (
        <>
            <Header />

            <main className="login-container">
                <img src={secureLogin} alt="Login seguro"/>

                <form onSubmit={handleLogin} className="login-form">
                    <h1>Faça seu login.</h1>
                    <p>Ainda não se cadastrou? <Link to="/register">Crie sua conta.</Link></p>

                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                        required/>

                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={event => setPassword(event.target.value)}
                        required/>

                    <button type="submit" className="common-button">Entrar</button>

                    <Link to="/">Esqueceu a senha?</Link>
                </form>
            </main>
        </>
    );
}

export default Login;