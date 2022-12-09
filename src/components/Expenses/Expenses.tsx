import React from 'react';

import styles from 'components/Expenses/Expenses.module.scss';

import { Expense } from 'models';
import Card from 'components/common/Card/Card';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';

type Props = {
  expenses: Array<Expense>;
};

const Expenses = (props: Props) => {
  return (
    <Card className={styles.expenses}>
      <ExpenseList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
