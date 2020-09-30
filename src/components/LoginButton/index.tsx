import React from 'react';

import arrowLeft from '../../assets/icons/arrow-right.svg';

import './styles.css';

function LoginButton() {
    return (
        <button className="login"><p>Comece agora</p> <img src={arrowLeft} alt="Arrow Left"/> </button>
    )
}

export default LoginButton;