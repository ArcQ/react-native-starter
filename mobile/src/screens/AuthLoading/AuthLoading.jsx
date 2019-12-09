import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function AuthLoading() {
  return (
    <View>
      <ActivityIndicator />
      {/* <StatusBar barStyle="default" /> */}
    </View>
  );
}
