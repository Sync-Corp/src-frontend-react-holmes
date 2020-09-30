import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

function ChoosePlan() {
    const history = useHistory();

    function handleSelectPlan(price: string) {
        sessionStorage.setItem('price', price);
        history.push('/payment');
    }

    return (
        <main className="plan-container">
            <h2>Escolha um plano</h2>

            <div className="plan-row">
                <div className="plan-item">
                    <h2>Mensal</h2>
                    <p>
                        Um mês de acesso ao Holmes.<br/>
                        Você renova sempre que precisar.
                    </p>
                    <h1>R$199,99</h1>
                    <button className="common-button" onClick={() => {
                        handleSelectPlan('199,99')
                    }}>Comprar</button>
                </div>

                <div className="plan-item">
                    <h2>Anual</h2>
                    <p>
                        Um ano de acesso ao Holmes.<br/>
                        Para você não se preocupar em renovar.
                    </p>
                    <h4 className="promotion">R$2.399,99</h4>
                    <h1>R$2199,99</h1>
                    <button className="common-button" onClick={() => {
                        handleSelectPlan('2.199,99')
                    }}>Comprar</button>
                </div>
            </div>
        </main >
    );
}

export default ChoosePlan;