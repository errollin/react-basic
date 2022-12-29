import React, { useState } from 'react';

import styles from 'components/NewExpense/ExpenseForm/ExpenseForm.module.scss';

import { Expense } from 'models';

type Props = {
  onSaveExpenseData: Function;
  onCancel: React.MouseEventHandler;
};

const ExpenseForm = (props: Props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const handleChangeTitle: React.ChangeEventHandler = (event: any) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTtile: event.target.value };
    // });
  };

  const handleChangeAmount: React.ChangeEventHandler = (event: any) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const handleChangeDate: React.ChangeEventHandler = (event: any) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const onSubmit: React.FormEventHandler = (event: any) => {
    event.preventDefault();

    const expenseData: Expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={handleChangeAmount}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            min='2022-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={handleChangeDate}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
