import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

import { authActions } from 'store/auth/ducks';
import { getImage } from 'assets/manager';
import customPropTypes from 'utils/customPropTypes';

import SignIn from './SignIn';

function SignInContainer(props) {
  const _props = {
    backgroundImage: getImage('signInBg'),
  };

  const methods = {
    onSignInPress(data) {
      props.login(data);
      props.navigation.navigate('Home');
    },
    onSignUpPress() {
      props.navigation.navigate('SignUp');
    },
    onForgotPasswordPress() {
      props.navigation.navigate('ForgotPassword');
    },
  };

  return <SignIn {...{ ..._props, ...methods }} />;
}

SignInContainer.propTypes = {
  navigation: customPropTypes.navigation,
};

SignInContainer.propTypes = {
  login: PropTypes.func,
};

const mapDispatchToProps = {
  login: authActions.login,
};

export default connect(undefined, mapDispatchToProps)(SignInContainer);
