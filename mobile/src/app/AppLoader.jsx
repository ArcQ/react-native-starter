import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AppLoading, SplashScreen } from 'expo';

import { loadResourcesAsync } from 'assets/manager';
import LoadingAnimation from './LoadingAnimation';

// SplashScreen.preventAutoHide();

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  // SplashScreen.hide();
  setLoadingComplete(true);
}

export default function ApplicationLoader(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  return <>
    <LoadingAnimation isLoaded={isLoadingComplete} />
    {
      (!isLoadingComplete && !props.skipLoadingScreen)
        ? <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
        : props.children
    }
  </>;
}

ApplicationLoader.propTypes = {
  children: PropTypes.node,
  skipLoadingScreen: PropTypes.bool,
};
