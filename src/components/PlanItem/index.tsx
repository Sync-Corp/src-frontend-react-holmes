import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlanType from '../../models/PlanType';
import User from '../../models/User';
import api from '../../services/api';
import HolmesModal from '../HolmesModal';

import './styles.css';

interface PlanItemProps {
    plan: PlanType
}

const PlanItem: React.FC<PlanItemProps> = ({ plan }) => {
    const history = useHistory();
    const [user, setUser] = useState<User>();

    const [isModalVisible, setModalVisible] = useState(false);

    const holmesModal = HolmesModal({
        title: "Espera aí!",
        message: "Para assinar um plano você deve primeiro logar em sua conta.",
        buttonText: "Vamos lá!",
        setVisible: setModalVisible,
        confirmAction: () => {
            history.push('/register');
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

        getUser();
    }, [history]);

    function handleSelectPlan() {
        if(!user) {
            setModalVisible(true);
            return;
        }

        history.push('/payment', { plan });
    }

    return (
        <>
            {isModalVisible && holmesModal}

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
        </>
    );
}

export default PlanItem;