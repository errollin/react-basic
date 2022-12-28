import React, { useState } from 'react';

import styles from 'components/Expenses/Expenses.module.scss';

import { Expense } from 'models';
import Card from 'components/common/Card/Card';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';
import ExpenseFilter from 'components/Expenses/ExpenseFilter/ExpenseFilter';

type Props = {
  expenses: Array<Expense>;
};

const Expenses = (props: Props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const handleFilterChange = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      <ExpenseList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
