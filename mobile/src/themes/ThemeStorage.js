import { AsyncStorage } from 'react-native';

export default {
  setTheme(name) {
    return AsyncStorage.setItem('theme', name);
  },
  getTheme() {
    return AsyncStorage.getItem('theme');
  },
};
