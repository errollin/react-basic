import React from 'react';

import styles from 'components/Chart/Chart.module.scss';

import { Item } from 'models';
import ChartBar from 'components/Chart/ChartBar/ChartBar';

type Props = {
  dataPoints: Array<Item>;
};

const Chart = (props: Props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return +dataPoint.value;
  });

  // const totalMaximum = Math.max(...dataPointValues);

  const totalMaximum = dataPointValues.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return previousValue + currentValue;
    },
    0
  );

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={+dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
