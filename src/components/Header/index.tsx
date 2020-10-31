import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../LoginButton';
import UserArea from '../UserArea';

import api from '../../services/api';

import logo from '../../assets/images/Holmes.svg';

import './styles.css';
import User from '../../models/User';

interface HeaderConfig {
    page?: string
}

const Header:React.FC<HeaderConfig> = ({page}) => {
    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        async function getUser() {
            try {
                const response = await api.get("/users", {
                    headers: { Authorization: "Bearer " + localStorage.getItem('session') }
                });

                setUser(response.data);
            } catch(err) {}
        }
        if(localStorage.getItem('session')) {
            getUser();
        }
            
    }, []);

    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="Logo Holmes"/>
                </Link>
                <ul id="top-menu">
                    <Link to="/" className="common-link">
                        <li className={`${page === 'about'?'selected':'unselected'}`}>Sobre</li>
                    </Link>
                    <Link to="/choose-plan" className="common-link">
                        <li className={`${page === 'plans'?'selected':'unselected'}`}>Planos</li>
                    </Link>
                    <Link to="/support" className="common-link">
                        <li className={`${page === 'support'?'selected':'unselected'}`}>Suporte</li>
                    </Link>
                    <Link to="/download">
                        <li className={`${page === 'download'?'selected':'unselected'}`}>Download</li>
                    </Link>
                </ul>
            </nav>

            <span className="right-menu-area">
                {
                    user ?
                    (<UserArea user={user} setUser={setUser}/>) :
                    (<Link to="/register" className="common-link">
                        <LoginButton />
                    </Link>)
                }
            </span>
        </header>
    )
}

export default Header;