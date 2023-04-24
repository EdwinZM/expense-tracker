import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../Card/Card';
import { useState } from 'react';

function ExpenseItem(props) {
    
    const [currentTitle, setTitle] = useState(props.title)

    function clickHandler() {
        setTitle('Updated!')
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
           <div className='expense-item__description'>
            <h2>{currentTitle}</h2>
            <div className='expense-item__price'><h2>${props.amount}</h2></div>
           </div>
           <button onClick={clickHandler}>Change Title</button>
         
        </Card>
    )
}

export default ExpenseItem;