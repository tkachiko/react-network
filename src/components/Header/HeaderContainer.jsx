import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../redux/auth-reducer';
import Header from './Header';
import { authAPI } from '../../API/API';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
