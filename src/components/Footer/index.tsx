import React from 'react';

import LoginButton from '../LoginButton';

import logo from '../../assets/images/Holmes.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <img src={logo} alt="Logo Holmes"/>
                <span className="buttons-container">
                    <button className="common-button">Saiba mais</button>
                    {!localStorage.getItem('session') && 
                        <Link to="/register" className="common-link">
                            <LoginButton />
                        </Link>
                    }
                </span>
            </div>
            <div className="footer-info">
                <span className="adress">
                    <p>
                        Rua Feliciano de Mendonça, 290<br/>
                        Guaianases, São Paulo - SP, 08460-365<br/>
                        <br/>
                        syncCorp@gmail.com
                    </p>
                </span>
                <span className="know">
                    <h4>Conheça</h4>
                    <div>
                        <ul className="footer-list">
                            <li>Sobre</li>
                            <li>Planos</li>
                            <li>Comprar</li>
                        </ul>
                    </div>
                </span>
                <span className="find">
                    <h4>Encontre</h4>
                    <div>
                        <ul className="footer-list">
                            <li>Acesso</li>
                            <li>Suporte</li>
                            <li>Sync</li>
                        </ul>
                    </div>
                </span>
                <span className="social">
                    <h4>Redes sociais</h4>
                    <div>
                        <ul className="social-list">
                            <li><img src={facebook} alt="Facebook icon"/></li>
                            <li><img src={twitter} alt="Twitter icon"/></li>
                            <li><img src={instagram} alt="Instagram icon"/></li>
                        </ul>
                    </div>
                </span>
            </div>
            <div className="copy">
                <p>© Sync™, 2020. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;