import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from 'screens/SettingsScreen';

export default createStackNavigator(
  {
    Home: SettingsScreen,
  },
);
