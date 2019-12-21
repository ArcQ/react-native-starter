import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { APP_STACK, AUTH_LOADING_ROUTE, AUTH_STACK } from 'navigation/routes';
import AppStack from 'navigation/AppStack';
import AuthStack from 'navigation/AuthStack';
import AuthLoadingContainer from 'screens/AuthLoading/AuthLoadingContainer';

export default createAppContainer(
  createSwitchNavigator(
    {
      [AUTH_LOADING_ROUTE]: AuthLoadingContainer,
      [APP_STACK]: AppStack,
      [AUTH_STACK]: AuthStack,
    },
    {
      initialRouteName: AUTH_LOADING_ROUTE,
    },
  ),
);
