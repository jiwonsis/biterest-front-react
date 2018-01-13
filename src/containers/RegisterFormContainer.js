import React, { Component } from 'react';
import { RegisterForm } from 'components';
// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from 'store/modules/register';
import * as userActions from 'store/modules/user';
import debounce from 'lodash/debounce'
import { withRouter } from 'react-router';

class RegisterFormContainer extends Component {
  handleChangeNickName = (e) => {
    const { value } = e.target;
    const { RegisterActions } = this.props;

    RegisterActions.changeNickName(value);
    this.checkDisplayName(value);
  }

  checkDisplayName = debounce((value) => {
    const { RegisterActions } = this.props;
    RegisterActions.checkDisplayName(value);
  }, 500);

  handleNickNameBlur = () => {
    const { nickName, RegisterActions } = this.props;
    RegisterActions.checkDisplayName(nickName);
  }

  handleSetCurrency = (currency) => {
    const { RegisterActions } = this.props;
    RegisterActions.setCurrency(currency);
  }

  handleSelectOptionIndex = (index) => {
    const { RegisterActions } = this.props;
    RegisterActions.selectOptionIndex(index);
  }

  handleSubmit = async () => {

    const { nickname, currency, optionIndex, authForm, history, RegisterActions, UserActions } = this.props;
    const { email, password } = authForm.toJS();

    if(nickname.length < 1) {
      RegisterActions.setError('닉네임을 입력하세요');
      return;
    }

    try {
      await RegisterActions.submit({
        displayName: nickname,
        email,
        password,
        initialMoney: {
          currency,
          index: optionIndex
        }
      });

      const { result } = this.props;
      UserActions.setUser(result);
      history.push('/')
    } catch (e) {
      console.log(e);
    }

    
  }


  render() {

    const { nickname, currency, optionIndex, displayNameExists, error } = this.props;
    const {
      handleChangeNickName,
      handleSetCurrency,
      handleSelectOptionIndex,
      handleSubmit,
      handleNickNameBlur
    } = this;
    return (
      <RegisterForm
        nickname={nickname}
        currency={currency}
        optionIndex={optionIndex}
        displayNameExists={displayNameExists}
        error={error}
        onChangeNickname={handleChangeNickName}
        onSetCurrency={handleSetCurrency}
        onSelectOptionIndex={handleSelectOptionIndex}
        onSubmit={handleSubmit} 
        onNicknameBlur={handleNickNameBlur} />
    );
  }
}

export default connect(
  (state) => ({
    authForm: state.auth.get('form'),
    nickname: state.register.get('nickname'),
    currency: state.register.get('currency'),
    optionIndex: state.register.get('optionIndex'),
    displayNameExists: state.register.get('displayNameExists'),
    error: state.register.get('error'),
    result: state.register.get('result')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(withRouter(RegisterFormContainer));