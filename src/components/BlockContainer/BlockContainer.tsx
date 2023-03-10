import classNames from 'classnames';
import React from 'react';
import styles from './style.module.css';

const BlockContainer = ({ containerType, oppStyles, children }) => {
  return <div className={classNames(styles[containerType], oppStyles)}>{children}</div>;
};

export default BlockContainer;
