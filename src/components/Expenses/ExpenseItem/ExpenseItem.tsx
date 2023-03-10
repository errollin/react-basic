import React from 'react';

import styles from 'components/Expenses/ExpenseItem/ExpenseItem.module.scss';

import Card from 'components/common/Card/Card';
import ExpenseDate from 'components/Expenses/ExpenseDate/ExpenseDate';

type Props = {
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = (props: Props) => {
  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={props.date} />
        <div className={styles['expense-item__description']}>
          <h2>{props.title}</h2>
          <div className={styles['expense-item__price']}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
