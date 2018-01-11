import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({big, fullWidth, clasName, ...rest}) => {
  return (
    <input className={cx('input', {
      big,
      'full-width': fullWidth
    }, clasName)} {...rest} />
  );
};

export default Input;