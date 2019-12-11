import React from 'react';

import { getImage } from 'assets/manager';
import customProptypes from 'utils/customProptypes';

import SignIn from './SignIn';

export default function SignInContainer(props) {
  const _props = {
    backgroundImage: getImage('signInBg'),
  };

  const methods = {
    onSignInPress(data) {
      props.navigation.navigate('Home');
    },
    onSignUpPress() {
      props.navigation.navigate('SignUp');
    },
    onForgotPasswordPress() {
      props.navigation.navigate('ForgotPassword');
    },
  };

  return <SignIn {...{..._props, ...methods}} />;
}

SignInContainer.propTypes = {
  navigation: customProptypes.navigation,
};
