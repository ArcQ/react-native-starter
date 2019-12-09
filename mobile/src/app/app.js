import { mapping } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React, {
  useRef, useEffect, useContext, useState,
} from 'react';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import navigationService from 'services/navigation/navigationService';
import AppNavigator from 'navigation/AppNavigator';
import AppLoader from 'app/AppLoader';
import { fonts, images } from 'assets';
import ThemeStore from 'themes/ThemeStorage';
import themes, { ThemeContext } from 'themes';
import getStore from 'store/store';

useScreens();

function onNavigationStateChange(prevState, currentState) {
  // const prevStateName = getCurrentStateName(prevState);
  // const currentStateName = getCurrentStateName(currentState);
  // if (prevStateName !== currentStateName) {
  //   trackScreenTransition(currentStateName)
  //     .catch(this.onTransitionTrackError);
  // }
}

function onTransitionTrackError(error) {
  console.warn('Analytics error: ', error.message);
}


function App() {
  const navigatorRef = useRef(null);

  useEffect((_navigatorRef) =>
    navigationService.setNavigator(_navigatorRef), [navigatorRef]);

  const { currentTheme } = useContext(ThemeContext);

  return (<ApplicationProvider mapping={mapping} theme={themes['Eva Light']}>
    {/* <DynamicStatusBar currentTheme={currentTheme()} /> */}
    {/* <Router onNavigationStateChange={onNavigationStateChange} /> */}
    <AppNavigator ref={navigatorRef} />
  </ApplicationProvider>);
}

App.propTypes = {};

const store = getStore();

export default function AppContainer(props) {
  const { theme, setTheme } = useState('Eva Light');
  const contextValue = {
    currentTheme: () => theme,
    toggleTheme() {
      ThemeStore.setTheme(theme).then(() => {
        setTheme(theme);
      });
    },
  };

  return <Provider store={store}>
    <AppLoader assets={{ images, fonts }}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={contextValue}>
        <App {...props} />
      </ThemeContext.Provider>
    </AppLoader>
  </Provider>;
}
