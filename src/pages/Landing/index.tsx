import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import holmesIntro from '../../assets/images/HolmesIntro.svg';
import holmesDesc from '../../assets/images/Desc.svg';

import poupeTempo from '../../assets/images/PoupeTempo.svg';
import acesso24h from '../../assets/images/24h-de-Acesso.svg';
import privacidade from '../../assets/images/Privacidade.svg';
import economize from '../../assets/images/Economize.svg';

import poupeTempoBack from '../../assets/images/Box-tempo.svg';
import acesso24hBack from '../../assets/images/Box-24h.svg';
import privacideBack from '../../assets/images/Box-privacidade.svg'
import economizeBack from '../../assets/images/Box-economize.svg';
 
import './styles.css';

function Landing() {
    return (
        <>
            <Header page="about"/>

            <article className="future-security">
                <div>
                    <h1>O futuro da segurança.</h1>
                    <p>
                        Holmes é uma inteligência artificial criada pela Sync
                        para auxiliar no monitoramento do seu patrimônio de maneira simples e autônoma.
                        O futuro da segurança está aqui, caro Watson.
                    </p>
                    <button className="common-button">Saiba mais</button>
                </div>

                <img src={holmesIntro} alt="Detetive"/>
            </article>

            <article className="how-holmes">
                <img src={holmesDesc} alt="Homem atarefado"/>

                <div>
                    <h2>Escolha a melhor alternativa de monitoramento.</h2>
                    <p>
                        Tudo o que você precisa é de uma câmera. 
                        Holmes observa as imagens capturadas e confere a permanência dos seus equipamentos mais importantes. 
                        Um deles desapareceu? O Holmes te notifica! 
                        O horário e as imagens do momento do desaparecimento 
                        estarão prontas para sua visualização.
                        As vantagens? Confere aí!
                    </p>
                </div>
            </article>

            <article className="holmes-benefits">
                <div className="benefit-row">
                    <div className="benefit-item">
                        <img src={poupeTempo} alt="Poupe Tempo" className="benefit-icon"/>
                        <img src={poupeTempoBack} alt="Poupe Tempo"/>

                        <div className="benefit-description">
                            <h3>Poupe Tempo</h3>

                            <p>
                                Horas procurando nas imagens quando um objeto sumiu?
                                Nunca mais! O momento exato do ocorrido já fica salvo para você nunca mais perder seu tempo.
                            </p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <img src={acesso24h} alt="Poupe Tempo" className="benefit-icon"/>
                        <img src={acesso24hBack} alt="Poupe Tempo"/>

                        <div className="benefit-description">
                            <h3>24h de Acesso</h3>

                            <p>
                                Dependa apenas de você mesmo! 
                                O acesso às câmeras e notificações fica disponível sempre que você precisar, com apenas alguns clicks.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="benefit-row">
                    <div className="benefit-item">
                        <img src={economize} alt="Poupe Tempo" className="benefit-icon"/>
                        <img src={economizeBack} alt="Poupe Tempo"/>

                        <div className="benefit-description">
                            <h3>Economize</h3>

                            <p>
                                Sem dinheiro para investir num Circuito Fechado de TV, monitoramento eficaz,
                                sistema de alarme e outros métodos de segurança? Nossos planos vieram para facilitar!
                            </p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <img src={privacidade} alt="Poupe Tempo" className="benefit-icon"/>
                        <img src={privacideBack} alt="Poupe Tempo"/>

                        <div className="benefit-description">
                            <h3>Privacidade</h3>

                            <p>
                                Livre-se de terceiros vigiando seu espaço. 
                                Apenas o computador logado em sua conta poderá visualizar, gerenciar e ser notificado sobre ocorrências nas câmeras.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="holmes-pitch">
                <div>
                    <h2>Assita ao Pitch.</h2>
                    <p>Um exemplo simples para dar fim às suas dúvidas.</p>
                </div>

                <iframe title="Vídeo Pitch do Holmes" src="https://www.youtube.com/embed/tormiPmhXjg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
            </article>

            <article className="holmes-plan">
                <h2>Planos</h2>
                <div className="plan-row">
                    <div className="plan-item">
                        <h2>Mensal</h2>
                        <p>
                            Um mês de acesso ao Holmes.<br/>
                            Você renova sempre que precisar.
                        </p>
                        <h1>R$199,99</h1>
                        <button className="common-button">Comprar</button>
                    </div>

                    <div className="plan-item">
                        <h2>Anual</h2>
                        <p>
                            Um ano de acesso ao Holmes.<br/>
                            Para você não se preocupar em renovar.
                        </p>
                        <h4 className="promotion">R$2.399,99</h4>
                        <h1>R$2199,99</h1>
                        <button className="common-button">Comprar</button>
                    </div>
                </div>
            </article>

            <Footer />
        </>
    )
}

export default Landing;