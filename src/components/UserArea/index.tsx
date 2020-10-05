import React, { useState } from 'react';

import User from '../../models/User';

import userIcon from '../../assets/icons/user-default.svg';

import myAccount from '../../assets/icons/my-account.svg';
import myPlan from '../../assets/icons/my-plan.svg';
import contact from '../../assets/icons/contact.svg';
import exit from '../../assets/icons/exit.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

interface UserAreaProps {
    user: User;
    setUser: Function;
}

const UserArea: React.FC<UserAreaProps> = ({ user, setUser }) => {
    const history = useHistory();
    const [colapsed, setColapsed] = useState(false);

    function handleUpdateUserMenu() {
        setColapsed(!colapsed);
    }

    function handleExit() {
        localStorage.removeItem('session');
        setUser(undefined);
        history.push('/');
    }

    return (
        <>
            <span className="user-container" onClick={handleUpdateUserMenu}>
                <img src={userIcon} alt="Avatar do usuario"/>
                <p>{user.name}</p>
            </span>

            <div className={`${colapsed ? 'user-menu':'user-menu-hidden'}`}>
                <Link to="/my-account">
                    <span>
                        <img src={myAccount} alt="Ícone minha conta"/>
                        <p>Minha conta</p>
                    </span>
                </Link>
                <span>
                    <img src={myPlan} alt="Ícone meu plano"/>
                    <p>Meu plano</p>
                </span>
                <Link to="/support">
                    <span>
                        <img src={contact} alt="Ícone contato"/>
                        <p>Contato</p>
                    </span>
                </Link>
                <span onClick={handleExit}>
                    <img src={exit} alt="Ícone sair"/>
                    <p>Sair</p>
                </span>
            </div>
        </>
    );
}

export default UserArea;