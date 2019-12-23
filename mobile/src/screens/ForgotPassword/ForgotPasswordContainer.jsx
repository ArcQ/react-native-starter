import { connect } from 'react-redux';
import React from 'react';

import { authActions } from 'store/auth/ducks';
import SignInContainer from 'screens/SignIn/SignInContainer';
import CustomPropTypes from 'utils/customPropTypes';

import ForgotPassword from './ForgotPassword';

function ForgotPasswordContainer(props) {
  const _props = {
    ...props,
    onResetPress: () => {
      props.navigation.goBack();
    },
  };
  return <ForgotPassword {..._props} />;
}

ForgotPasswordContainer.propTypes = {
  navigation: CustomPropTypes.navigation,
};

const mapDispatchToProps = {
  resetPassword: authActions.resetPassword,
};

export default connect(undefined, mapDispatchToProps)(SignInContainer);
