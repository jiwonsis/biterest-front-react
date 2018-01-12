import React, { Component } from 'react';
import { RegisterForm } from 'components';
// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from 'store/modules/register';

class RegisterFormContainer extends Component {
  handleChangeNickName = (e) => {
    const { value } = e.target;
    const { RegisterActions } = this.props;

    RegisterActions.changeNickName(value);
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
    const { nickName, currency, optionIndex } = this.props;
    console.log(nickName, currency, optionIndex);
  }


  render() {

    const { nickName, currency, optionIndex } = this.props;
    const {
      handleChangeNickName,
      handleSetCurrency,
      handleSelectOptionIndex,
      handleSubmit
    } = this;
    return (
      <RegisterForm
        nickName={nickName}
        currency={currency}
        optionIndex={optionIndex}
        onChangeNickname={handleChangeNickName}
        onSetCurrency={handleSetCurrency}
        onSelectOptionIndex={handleSelectOptionIndex}
        onSubmit={handleSubmit} />
    );
  }
}

export default connect(
  (state) => ({
    nickName: state.register.get('nickname'),
    currency: state.register.get('currency'),
    optionIndex: state.register.get('optionIndex')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch)
  })
)(RegisterFormContainer);