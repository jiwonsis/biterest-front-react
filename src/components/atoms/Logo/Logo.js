import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx('logo')}>
      biterest
    </div>
  );
};

export default Logo;