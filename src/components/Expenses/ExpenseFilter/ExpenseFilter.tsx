import React from 'react';

import styles from 'components/Expenses/ExpenseFilter/ExpenseFilter.module.scss';

import { Year } from 'models';
import { DUMMY_YEAR_OPTIONS } from 'data';

type Props = {
  selected: string;
  onFilterChange: Function;
};

const ExpenseFilter = (props: Props) => {
  const years: Array<Year> = DUMMY_YEAR_OPTIONS;

  const handleChangeFilter: React.ChangeEventHandler = (event: any) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className={styles['expenses-filter']}>
      <div className={styles['expenses-filter__control']}>
        <label htmlFor='year'>Filter By Year</label>
        <select id='year' value={props.selected} onChange={handleChangeFilter}>
          {years.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
