import React, { useState } from 'react';

import styles from 'components/NewExpense/NewExpense.module.scss';

import { Expense } from 'models';

import Card from 'components/common/Card/Card';
import ExpenseForm from 'components/NewExpense/ExpenseForm/ExpenseForm';

type Props = {
  onAddExpense: Function;
};

const NewExpense = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData: Expense) => {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return (
    <Card className={styles['new-expense']}>
      {!isEditing && (
        <button onClick={handleStartEditing}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleStopEditing}
        />
      )}
    </Card>
  );
};

export default NewExpense;
