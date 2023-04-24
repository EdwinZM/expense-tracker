import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {
    return (
        <main className='new-expense'>
            <ExpenseForm/>
        </main>
    )
}

export default NewExpense;