import React from 'react';

import styles from 'components/NewExpense/NewExpense.module.scss';

import { Expense } from 'models';

import Card from 'components/common/Card/Card';
import ExpenseForm from 'components/NewExpense/ExpenseForm/ExpenseForm';

type Props = {
  onAddExpense: Function;
};

const NewExpense = (props: Props) => {
  const handleSaveExpenseData = (enteredExpenseData: Expense) => {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Card className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </Card>
  );
};

export default NewExpense;
