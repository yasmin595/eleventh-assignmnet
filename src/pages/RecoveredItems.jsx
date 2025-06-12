import React from 'react';
import { useLoaderData } from 'react-router';
import RecoveredCard from './RecoveredCard';

const RecoveredItems = () => {


const recoveredItems = useLoaderData();



    return (
        <div className='w-9/12 mx-auto bg-base-300 '>

            
 {
    recoveredItems.map(recoverItem=> <RecoveredCard  key={recoverItem._Id}  recoverItem={recoverItem} ></RecoveredCard>) 
 }

        </div>
    );
};

export default RecoveredItems;