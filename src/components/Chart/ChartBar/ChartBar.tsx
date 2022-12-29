import React from 'react';

import styles from 'components/Chart/ChartBar/ChartBar.module.scss';

type Props = {
  label: string;
  value: number;
  maxValue: number;
};

const ChartBar = (props: Props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles['chart-bar__label']}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
