import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from 'app/app';

if (__DEV__) { // eslint-disable-line
  activateKeepAwake();
}

registerRootComponent(App);
