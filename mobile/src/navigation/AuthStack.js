import { createStackNavigator } from 'react-navigation-stack';

import {
  FORGOT_PASSWORD_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from 'navigation/routes';
import SignInContainer from 'screens/SignIn/SignInContainer';
import SignUpContainer from 'screens/SignUp/SignUpContainer';
import {
  ForgotPasswordContainer,
} from 'screens/ForgotPassword/ForgotPasswordContainer';

const AuthStack = createStackNavigator(
  {
    [SIGN_IN_ROUTE]: {
      screen: SignInContainer,
      navigationOptions: {
        header: null,
      },
    },
    [SIGN_UP_ROUTE]: {
      screen: SignUpContainer,
      navigationOptions: {
        header: null,
      },
    },
    [FORGOT_PASSWORD_ROUTE]: {
      screen: ForgotPasswordContainer,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: SIGN_UP_ROUTE,
  },
);

AuthStack.path = '';

export default AuthStack;
