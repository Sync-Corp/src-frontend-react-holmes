import React from 'react';
import ChoosePlan from '../../components/ChoosePlan';
import Header from '../../components/Header';

import './styles.css';

const Plan = () => {
    return (
        <>
            <Header page="plans"/>
            
            {
                /**
                 * localStorage.getItem('session') ?
                    (<ViewPlan />) :
                    ()
                 */
            }

            <ChoosePlan />
            
        </>
    );
}

export default Plan;