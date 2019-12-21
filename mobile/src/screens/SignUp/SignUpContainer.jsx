import React from 'react';

import { HOME_ROUTE, SIGN_IN_ROUTE } from 'navigation/routes';

import SignUp from './SignUp';

export default function SignUpContainer(props) {
  const methods = {
    onSignUpPress(data) {
      props.navigation.navigate(HOME_ROUTE);
    },
    onSignInPress() {
      props.navigation.navigate(SIGN_IN_ROUTE);
    },
  };

  return (
    <SignUp
      {...{..._props, ...methods}}
    />
  );
}
