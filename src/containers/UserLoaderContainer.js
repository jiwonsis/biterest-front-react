import React, { Component } from 'react';
// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'store/modules/user';
import storage from 'lib/storage';

class UserLoaderContainer extends Component {
  componentDidMount() {
    const user = storage.get('__BITRESET_USER__');
    if(user) {
      const { UserActions } = this.props;
      UserActions.setUser(user);
    }
  }

  render() {
    return null;
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(UserLoaderContainer);