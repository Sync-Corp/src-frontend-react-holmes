import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import accountBanner from '../../assets/images/account-banner.svg';
import userDefault from '../../assets/icons/user-xl.svg';

import './styles.css';
import User from '../../models/User';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function MyAccount() {
    const history = useHistory();

    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        async function getUser() {
            try {
                const response = await api.get("/users", {
                    headers: { Authorization: "Bearer " + localStorage.getItem('session') }
                });

                setUser(response.data);
            } catch(err) {
            }
        }
        if(!localStorage.getItem('session'))
            history.push("/");

        getUser();
    }, [history]);

    return (
        <>
            <Header />

            <main className="my-account-container">
                <img src={accountBanner} alt="Homem gerenciando sua conta"/>
                <div className="account-info">
                    <h1>Minha conta:</h1>
                    <img src={userDefault} alt={`${user?.name}`}/>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <button>Editar meu perfil</button>
                    <span className="buttons-row">
                        <button>Alterar meu e-mail</button>
                        <button>Alterar senha</button>
                    </span>
                </div>
            </main>
        </>
    );
}

export default MyAccount;