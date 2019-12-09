import { AsyncStorage } from 'react-native';
import React, { useEffect } from 'react';

import AuthLoading from 'screens/AuthLoading/AuthLoading';

async function checkSignIn(navigate) {
  const userToken = await AsyncStorage.getItem('userToken');

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  navigate(userToken ? 'App' : 'Auth');
}

export default function AuthLoadingContainer(props) {
  useEffect(() => {
    checkSignIn(props.navigation.navigate);
  }, []);
  return <AuthLoading />;
}
