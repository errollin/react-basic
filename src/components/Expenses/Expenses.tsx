import React, { useState } from 'react';

import styles from 'components/Expenses/Expenses.module.scss';

import { Expense } from 'models';
import Card from 'components/common/Card/Card';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';
import ExpenseFilter from 'components/Expenses/ExpenseFilter/ExpenseFilter';
import ExpenseChart from 'components/Expenses/ExpenseChart/ExpenseChart';

type Props = {
  expenses: Array<Expense>;
};

const Expenses = (props: Props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const handleFilterChange = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
