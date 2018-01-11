import React from 'react';
import styles from './ScreenMask.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ScreenMask = () => {
  return (
    <div className={cx('screen-mask')}>
      HI!!!
    </div>
  );
};

export default ScreenMask;