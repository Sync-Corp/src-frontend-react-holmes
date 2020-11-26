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

        try {
            const formData = new FormData();
            formData.append('grant_type', 'password')
            formData.append('username', email);
            formData.append('password', password);

            const config = {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'authorization': 'Basic aG9sbWVzLWZyb250Okx6cXdZWkliZW9CVWhmc0tkdnpLVlU3cnN0V2J6SVk5NWN2VTExVjU='
                },
            }

            const response = await api.post("oauth/token", formData, config);

            localStorage.setItem('token', response.data.access_token); 

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