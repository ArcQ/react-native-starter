import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Drawer } from '@ui-kitten/components';
import React from 'react';
import { Platform } from 'react-native';

import SafeAreaViewByPlatform from
  'navigation/components/SafeAreaViewByPlatform';
import HomeScreen from 'screens/HomeScreen';
import SearchScreen from 'screens/SearchScreen';
import SettingsScreen from 'screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Ideas',
};

HomeStack.path = '';

const DrawerComponent = ({ navigation }) => {
  const onSelect = index => {
    const { [index]: selectedTabRoute } = navigation.state.routes;
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaViewByPlatform>
      <Drawer
        data={[{ title: 'Home' }, { title: 'Settings' }]}
        onSelect={onSelect}
      />
    </SafeAreaViewByPlatform>
  );
};

export default createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    contentComponent: DrawerComponent,
  },
);
