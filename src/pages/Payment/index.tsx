import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import payment from '../../assets/images/payment.svg';
import rightArrow from '../../assets/icons/white-right-arrow.svg';
import leftArrow from '../../assets/icons/white-left-arrow.svg';

import './styles.css';

const Payment = () => {
    const history = useHistory();

    const [price, setPrice] = useState('0');
    const [card, setCard] = useState(false);
    const [billet, setBillet] = useState(false);

    function handldeSelectPaymentMode() {
        history.push('/download');
    }

    function handleBackToChoosePlan() {
        history.push('/choose-plan');
    }

    useEffect(() => {
        const value = sessionStorage.getItem('price');
        setPrice(`${value}`);
    }, [])

    return (
        <>
            <Header page="plans"/>

            <main className="payment-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1>Realize o Pagamento.</h1>

                    <div className="radio-container">
                        <span>
                            <input 
                            type="radio" 
                            id="rbBoleto" 
                            name="pagamento" 
                            checked={billet} 
                            onChange={e => {
                                setBillet(!billet); 
                                if(card!==billet)
                                    setCard(!card);
                            }}/>
                            <label htmlFor="rbBoleto">Boleto Bancário</label>
                        </span>
                        {billet &&
                            <>
                                <span className="radio-row">
                                    <p>Total a pagar:</p>
                                    <p className="value">R${`${price}`}</p>
                                </span>
                                <span className="radio-row">
                                    <p>Data de vencimento:</p>
                                    <p className="value">22/10/2020</p>
                                </span>
                            </>
                        }
                    </div>

                    <div className="radio-container"> 
                        <span>
                            <input 
                            type="radio" 
                            id="rbCartao" 
                            name="pagamento" 
                            checked={card} 
                            onChange={e => { 
                                setCard(!card); 
                                if(card!==billet)
                                    setBillet(!billet); 
                            }}/>
                            <label htmlFor="rbCartao">Cartão de Crédito</label>
                        </span>
                        {card && 
                        <>
                            <span className="radio-row">
                                <p>Total a pagar:</p>
                                <p className="value">R${`${price}`}</p>
                            </span>
                            <span className="radio-row">
                                <input type="text" placeholder="Número do Cartão"/>
                                <input type="text" placeholder="MM / AA"/>
                            </span>
                            <span className="radio-row">
                                <input type="text" placeholder="Nome do Titular"/>
                                <input type="text" placeholder="CVV"/>
                            </span>
                        </>
                        }
                    </div>

                    <div className="buttons-row">
                        <button onClick={handleBackToChoosePlan} className="icon-back-button">
                            <img src={leftArrow} alt="Seta para a esquerda"/>
                            <p>Voltar</p>
                        </button>
                        <button onClick={handldeSelectPaymentMode} className="icon-button">
                            <p>Proximo passo</p>
                            <img src={rightArrow} alt="Seta para a direita"/>
                        </button>
                    </div>
                </form>

                <img src={payment} alt="Pagamento"/>
            </main>


        </>
    );
}

export default Payment;