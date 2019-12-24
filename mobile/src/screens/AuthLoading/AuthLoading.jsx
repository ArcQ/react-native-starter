import React from 'react';
import {
  ActivityIndicator,
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
