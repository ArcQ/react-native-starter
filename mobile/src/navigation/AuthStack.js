import { createStackNavigator } from 'react-navigation-stack';

import SignInContainer from 'screens/SignIn/SignInContainer';
// import SignUpContainer from 'screens/SignUp/SiginUpContainer';
// import {
//   ForgotPasswordContainer,
// } from 'screens/ForgotPassword/ForgotPasswordContainer';

const AuthStack = createStackNavigator(
  {
    SignIn: SignInContainer,
    // SignUp: SignUpContainer,
    // ForgotPassword: ForgotPasswordContainer,
  },
);

AuthStack.path = '';

export default AuthStack;
