import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlanType from '../../models/PlanType';
import User from '../../models/User';
import api from '../../services/api';

interface PlanItemProps {
    plan: PlanType
}

const PlanItem: React.FC<PlanItemProps> = ({ plan }) => {
    const history = useHistory();
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

        getUser();
    }, [history]);

    function handleSelectPlan() {
        if(!user) {
            alert('Crie uma conta para adquirir seu plano!')
            return history.push('/register');
        }

        history.push('/payment', { plan });
    }

    return (
        <div className="plan-item">
            <h2>{plan.name}</h2>
            <p>
                {plan.description}
            </p>
            <h1>{plan.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
            <button className="common-button" onClick={() => {
                handleSelectPlan()
            }}>Quero esse!</button>
        </div>
    );
}

export default PlanItem;