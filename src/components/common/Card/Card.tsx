import React from 'react';

import styles from 'components/common/Card/Card.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Card = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
