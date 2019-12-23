import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

import { authActions } from 'store/auth/ducks';
import customPropTypes from 'utils/customPropTypes';
import { HOME_ROUTE, SIGN_IN_ROUTE } from 'navigation/routes';

import SignUp from './SignUp';

function SignUpContainer(props) {
  const methods = {
    onPhotoPress() {},
    onSignUpPress(data) {
      props.register(data);
      props.navigation.navigate(HOME_ROUTE);
    },
    onSignInPress() {
      props.navigation.navigate(SIGN_IN_ROUTE);
    },
  };

  return <SignUp {...{ ...props, ...methods }} />;
}

SignUpContainer.propTypes = {
  navigation: customPropTypes.navigation,
  register: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  register: authActions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
