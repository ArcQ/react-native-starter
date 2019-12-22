import { activateKeepAwake } from 'expo-keep-awake';
import config from 'config.json';
import configProd from 'config.production.json';

export default {
  init() {
    if (__DEV__) { // eslint-disable-line
      activateKeepAwake();
    }
  },
  getConfig() {
    if (__DEV__) {
      return config;
    }
    return configProd;
  },
};
