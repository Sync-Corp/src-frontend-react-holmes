import React from 'react';

import planBanner from '../../assets/images/plan-banner.svg';

import './styles.css';

function ViewPlan() {
    return (
        <div className="view-plan-container">
            <div className="plan-info">
                <h1>Meu Plano:</h1>
                <div className="plan-item">
                    <h3>Mensal</h3>
                    <p>
                        Um mês de acesso ao Holmes.
                        Você renova sempre que precisar.
                    </p>

                    <h2>R$199,99</h2>
                    <p>
                        Data de Vencimento:
                        <strong>23/10/2020</strong>
                    </p>
                    <button className="common-button">Renovar</button>
                </div>
            </div>
            <img src={planBanner} alt="Configure seu plano"/>
        </div>
    );
}

export default ViewPlan;