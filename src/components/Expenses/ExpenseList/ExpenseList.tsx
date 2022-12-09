import React from 'react';

import styles from 'components/Expenses/ExpenseList/ExpenseList.module.scss';

import { Expense } from 'models';
import ExpenseItem from 'components/Expenses/ExpenseItem/ExpenseItem';

type Props = {
  expenses: Array<Expense>;
};

const ExpenseList = (props: Props) => {
  return (
    <div className={styles['expenses-list']}>
      {props.expenses.map((item: Expense) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
