import React from 'react';

import { getImageUri } from 'assets/manager';
import customProptypes from 'utils/customProptypes';

import SignIn from './SignIn';

const NAVIGATION_KEY = 'Sign In';

export default function SignInContainer(props) {
  const _props = {
    backgroundImage: getImageUri('signInBg'),
  };

  const methods = {
    onSignInPress(data) {
      props.navigation.goBack();
    },
    onSignUpPress() {
      props.navigation.navigate({
        key: NAVIGATION_KEY,
        routeName: 'Sign Up',
      });
    },
    onForgotPasswordPress() {
      props.navigation.navigate({
        key: NAVIGATION_KEY,
        routeName: 'Forgot Password',
      });
    },
  };

  return <SignIn {...{..._props, ...methods}} />;
}

SignInContainer.propTypes = {
  navigation: customProptypes.navigation,
};
