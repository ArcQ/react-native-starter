import React from 'react';
import { withStyles } from '@ui-kitten/components';
import { Platform, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

function DynamicStatusBar({ themedStyle, ...props }) {
  const androidStatusBarBgColor = themedStyle.container.backgroundColor;
  const barStyle = () => ((props.currentTheme === 'Eva Light')
    ? 'dark-content'
    : 'light-content');

  return <View style={themedStyle.container}>
    <StatusBar
      backgroundColor={androidStatusBarBgColor}
      barStyle={barStyle}
    />
  </View>;
}

export default withStyles(
  DynamicStatusBar,
  theme => ({
    container: {
      backgroundColor: theme['background-basic-color-1'],
      height: Platform.select({
        ios: Constants.statusBarHeight,
        android: 0,
      }),
    },
  }),
);
