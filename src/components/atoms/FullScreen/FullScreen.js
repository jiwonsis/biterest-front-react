import React from 'react';
import styles from './FullScreen.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FullScreen = ({className, ...rest}) => {
  return (
    <div className={cx('full-screen', className)} {...rest}>
    </div>
  );
};

export default FullScreen;