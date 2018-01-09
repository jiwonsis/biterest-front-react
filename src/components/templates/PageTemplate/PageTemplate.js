import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({header, children, responsive}) => {
  return (
    <div className={cx('page')}>
      <header>
        {header}
      </header>
      <div className={cx('content', {
        'has-header' : header, // if there a header, give 3.5 padding to top
        responsive
      })}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;