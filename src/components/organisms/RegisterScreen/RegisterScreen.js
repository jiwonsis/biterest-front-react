import React from 'react';
import styles from './RegisterScreen.scss';
import classNames from 'classnames/bind';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { FullScreen, Logo } from 'components';

const cx = classNames.bind(styles);

const RegisterScreen = ({visible, children}) => {
  return (
    <CSSTransitionGroup
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
      transitionName={{
        enter: cx('enter'),
        leave: cx('leave')
      }}
    >
      { visible && 
        <FullScreen className={cx('register-screen')} >
          <Logo />
        </FullScreen>
      }
    </CSSTransitionGroup>
      

  );
};

export default RegisterScreen;