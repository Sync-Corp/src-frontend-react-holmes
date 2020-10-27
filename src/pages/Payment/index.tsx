import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../components/Header';

import payment from '../../assets/images/payment.svg';
import leftArrow from '../../assets/icons/white-left-arrow.svg';

import './styles.css';
import PlanType from '../../models/PlanType';
import api from '../../services/api';
import User from '../../models/User';

const Payment = () => {
    const history = useHistory();
    const location = useLocation();

    const [plan, setPlan] = useState<PlanType>({} as PlanType);
    const [card, setCard] = useState(false);
    const [billet, setBillet] = useState(false);
    const [user, setUser] = useState<User>();

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
        if(localStorage.getItem('session'))
            getUser();
    }, []);

    useEffect(() => {
        //@ts-ignore
        setPlan(location.state.plan);
        console.log(plan);
    }, []);

    async function handldeSelectPaymentMode() {
        const data = {
            person_id: user?.id,
            plan_type_id: plan.id
        }
        try {
            await api.post('plan', data);

            alert('Pagamento efeutado com sucesso!')
            history.push('/download');
        } catch(err) {
            alert('Não foi possivel realizar o pagamento');
        }
    }

    function handleBackToChoosePlan() {
        history.push('/choose-plan');
    }

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
                                    <p className="value">{plan.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
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
                                <p className="value">{plan.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
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
                            <p>Finalizar</p>
                        </button>
                    </div>
                </form>

                <img src={payment} alt="Pagamento"/>
            </main>


        </>
    );
}

export default Payment;