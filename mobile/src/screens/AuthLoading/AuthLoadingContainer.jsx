import { AsyncStorage } from 'react-native';
import React, { useEffect } from 'react';

import customPropTypes from 'utils/customPropTypes';
import AuthLoading from 'screens/AuthLoading/AuthLoading';

async function checkSignIn(navigate) {
  const userToken = await AsyncStorage.getItem('userToken');

  navigate(userToken ? 'Auth' : 'App');
}

export default function AuthLoadingContainer(props) {
  useEffect(() => {
    checkSignIn(props.navigation.navigate);
  }, []);
  return <AuthLoading />;
}

AuthLoadingContainer.propTypes = {
  navigation: customPropTypes.navigation,
};
