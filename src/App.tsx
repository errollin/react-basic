import React from 'react';

import 'App.scss';

import { DUMMY_EXPENSES } from 'data/expenses';
import { Expense } from 'models';
import Expenses from 'components/Expenses/Expenses';

const App = () => {

  const expenses: Array<Expense> = DUMMY_EXPENSES;

  return (
    <React.Fragment>
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
};

export default App;
