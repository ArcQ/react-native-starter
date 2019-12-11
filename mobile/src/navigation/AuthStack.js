import { createStackNavigator } from 'react-navigation-stack';

import SignInContainer from 'screens/SignIn/SignInContainer';
import SignUpContainer from 'screens/SignUp/SignUpContainer';
import {
  ForgotPasswordContainer,
} from 'screens/ForgotPassword/ForgotPasswordContainer';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInContainer,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpContainer,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordContainer,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

AuthStack.path = '';

export default AuthStack;
