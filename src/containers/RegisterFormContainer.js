import React, { Component } from 'react';
import { RegisterForm } from 'components';
// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from 'store/modules/register';
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

  handleSubmit = () => {
    const { nickName, currency, optionIndex, authForm, RegisterActions } = this.props;
    const { email, password } = authForm.toJS();

    RegisterActions.submit({
      displayName: nickName,
      email,
      password,
      initialMoney: {
        currency,
        index: optionIndex
      }
    });
  }


  render() {

    const { nickName, currency, optionIndex, displayNameExists } = this.props;
    const {
      handleChangeNickName,
      handleSetCurrency,
      handleSelectOptionIndex,
      handleSubmit,
      handleNickNameBlur
    } = this;
    return (
      <RegisterForm
        nickName={nickName}
        currency={currency}
        optionIndex={optionIndex}
        displayNameExists={displayNameExists}
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
    nickName: state.register.get('nickname'),
    currency: state.register.get('currency'),
    optionIndex: state.register.get('optionIndex'),
    displayNameExists: state.register.get('displayNameExists')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch)
  })
)(withRouter(RegisterFormContainer));