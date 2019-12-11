import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppStack from 'navigation/AppStack';
import AuthStack from 'navigation/AuthStack';
import AuthLoadingContainer from 'screens/AuthLoading/AuthLoadingContainer';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingContainer,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
