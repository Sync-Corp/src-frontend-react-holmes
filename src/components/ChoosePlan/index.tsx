import React, { useEffect, useState } from 'react';
import PlanType from '../../models/PlanType';
import api from '../../services/api';
import PlanItem from '../PlanItem';

import './styles.css';

function ChoosePlan() {
    const [plans, setPlans] = useState<PlanType[]>([]);

    useEffect(() => {
        async function GetPlans() {
            try {
                const res = await api.get('plan');

                console.log(res);

                setPlans(res.data);
            } catch(err) {
                alert('Erro ao carregar os planos');
            }
        }

        GetPlans();
    }, []);

    
    return (
        <main className="plan-container">
            <h2>Escolha um plano</h2>

            <div className="plan-row">
                { plans.map(plan => <PlanItem key={plan.id} plan={plan} />) }
            </div>
        </main >
    );
}

export default ChoosePlan;