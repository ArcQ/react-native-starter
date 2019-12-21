import { createStackNavigator } from 'react-navigation-stack';

import { HOME_ROUTE } from 'navigation/routes';
import SettingsScreen from 'screens/SettingsScreen';

export default createStackNavigator(
  {
    [HOME_ROUTE]: SettingsScreen,
  },
);
