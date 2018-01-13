import { Component } from 'react';
// import redux dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'store/modules/user';
import storage from 'lib/storage';

class UserLoaderContainer extends Component {
  checkLoginStatus = async () => {
    const { UserActions } = this.props;
    const user = storage.get('__BITRESET_USER__');
    if(user) {
      UserActions.setUser(user);
    }

    try {
      await UserActions.checkLoginStatus();
      if (!user || (user._id !== this.props.user.get('_id'))) {
        // if there is any change in login status, resave the user info
        storage.set('__BITRESET_USER__', this.props.user.toJS());
      }
    } catch (e) {
      // if there is an error, removes the data from the storage
      storage.remove('__BITRESET_USER__');
    }
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return null;
  }
}

export default connect(
  (state) => ({
    user: state.user.get('user')
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(UserLoaderContainer);