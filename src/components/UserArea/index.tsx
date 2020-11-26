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
        localStorage.removeItem('token');
        setUser(undefined);
        history.push('/');
    }

    return (
        <>
            <span className="user-container" onClick={handleUpdateUserMenu}>
                <img src={userIcon} alt="Avatar do usuario"/>
                <span>{user.name}</span>
            </span>

            <div className={`${colapsed ? 'user-menu':'user-menu-hidden'}`}>
                <Link to="/my-account">
                    <div>
                        <img src={myAccount} alt="Ícone minha conta"/>
                        <span>Minha conta</span>
                    </div>
                </Link>
                <Link to="/my-plan">
                    <div>
                        <img src={myPlan} alt="Ícone meu plano"/>
                        <span>Meu plano</span>
                    </div>
                </Link>
                <Link to="/support">
                    <div>
                        <img src={contact} alt="Ícone contato"/>
                        <span>Contato</span>
                    </div>
                </Link>
                <div onClick={handleExit}>
                    <img src={exit} alt="Ícone sair"/>
                    <span>Sair</span>
                </div>
            </div>
        </>
    );
}

export default UserArea;