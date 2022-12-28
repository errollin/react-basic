import React, { useState } from 'react';

import 'App.scss';

import { DUMMY_EXPENSES } from 'data';
import { Expense } from 'models';
import Expenses from 'components/Expenses/Expenses';
import NewExpense from 'components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState<Array<Expense>>(DUMMY_EXPENSES)

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevSatate) => {
      return [expense, ...prevSatate];
    });
  };

  return (
    <React.Fragment>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
};

export default App;
