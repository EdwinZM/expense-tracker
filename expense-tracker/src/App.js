import './App.css';
import ExpenseItemList from './components/ExpenseItemList';

function App() {
  const expenses = [
    {'title': 'Car Insurance',
      'amount': 400,
      'date': new Date(2023, 2, 28)},
      {'title': 'health Insurance',
      'amount': 600,
      'date': new Date(2023, 3, 18)},
      {'title': 'Life Insurance',
      'amount': 300,
      'date': new Date(2023, 7, 19)},
  ]

  return (
    <main >
      <h2>Let's get started!</h2>
      <ExpenseItemList expenses={expenses}/>
    </main>
  ); 
}

export default App;
