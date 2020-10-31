import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../components/Header';

import payment from '../../assets/images/payment.svg';
import leftArrow from '../../assets/icons/white-left-arrow.svg';

import PlanType from '../../models/PlanType';
import api from '../../services/api';
import User from '../../models/User';

import './styles.css';
import HolmesModal from '../../components/HolmesModal';

const Payment = () => {
    const history = useHistory();
    const location = useLocation();

    const [plan, setPlan] = useState<PlanType>({} as PlanType);
    const [card, setCard] = useState(false);
    const [billet, setBillet] = useState(false);
    const [user, setUser] = useState<User>();
    const [isModalVisible, setModalVisible] = useState(false);

    const holmesModal = HolmesModal({
        title: "Quase lá",
        message: "Em alguns dias seu pagamento será processado. Assim que for reconhecido, você poderá acessar as funcionalidades do Holmes utilizando sua conta. Você pode ver a situação do pagamento em Perfil > Meu Plano.",
        buttonText: "Ok, entendi.",
        setVisible: setModalVisible,
        confirmAction: () => {
            history.push('/my-account');
        }
    });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handldeSelectPaymentMode() {
        const data = {
            person_id: user?.id,
            plan_type_id: plan.id
        }
        try {
            await api.post('plan', data);
            setModalVisible(true);
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

            {isModalVisible && holmesModal}


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
                            required
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
                                <input type="text" placeholder="Número do Cartão" required/>
                                <input type="text" placeholder="MM / AA" required/>
                            </span>
                            <span className="radio-row">
                                <input type="text" placeholder="Nome do Titular" required/>
                                <input type="text" placeholder="CVV" required/>
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