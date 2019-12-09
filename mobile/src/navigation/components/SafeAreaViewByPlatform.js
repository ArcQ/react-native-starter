import { pipe } from 'ramda';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Constants from 'expo-constants';

const setStatusBarBasedOnPlatform = pipe(
  Platform.select,
  SafeAreaView.setStatusBarHeight,
);

export default function SafeAreaViewByPlatform (props) {
  useEffect(() => setStatusBarBasedOnPlatform({
    ios: Constants.statusBarHeight,
    android: 0,
  }), []);

  return <SafeAreaView {...props} />;
}
