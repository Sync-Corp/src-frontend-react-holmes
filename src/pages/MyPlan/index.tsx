import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import User from '../../models/User';

import planBanner from '../../assets/images/plan-banner.svg';
import api from '../../services/api';

import './styles.css';
import Plan from '../../models/Plan';
import PlanType from '../../models/PlanType';

function MyPlan() {
    const history = useHistory();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ user, setUser ] = useState<User>();
    const [ plan, setPlan ] = useState<Plan>();
    const [ planType, setPlanType ] = useState<PlanType>();

    useEffect(() => {
        if(!localStorage.getItem('session'))
            history.push('/login');

        async function getUser() {
            try {
                const resUser = await api.get("/users", {
                    headers: { Authorization: "Bearer " + localStorage.getItem('session') }
                });

                const resPlan = await api.get(`/plan/${resUser.data.id}`);

                const resType = await api.get(`/plan-type/${resPlan.data.plan_type_id}`);

                if(!resPlan.data.id) {
                    alert('Você ainda não possui um plano!')
                    history.push('/choose-plan');
                }

                setUser(resUser.data);
                setPlan(resPlan.data);
                setPlanType(resType.data);
                
            } catch(err) {
                history.push('/login');
            }
        }

        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <div className="view-plan-container">
                <div className="plan-info">
                    <h1>Meu Plano:</h1>
                    <div className="plan-item">
                        <h3>{planType?.name}</h3>
                        <p>
                            {planType?.description}
                        </p>

                        <h2>{planType?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                        <p>
                            Data de Vencimento:
                            <strong>{`${plan?.final_date}`}</strong>
                        </p>
                        <button className="common-button">Renovar</button>
                    </div>
                </div>
                <img src={planBanner} alt="Configure seu plano"/>
            </div>
        </>
    );
}

export default MyPlan;