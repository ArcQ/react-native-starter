import React from 'react';
import { dark, light } from '@eva-design/eva';

import appTheme from './appTheme';

export const selectTheme = (config, currentTheme) => {
  if (config[currentTheme]) {
    return config[currentTheme];
  }
  if (config.default) {
    return config.default;
  }
  return null;
};

const themes = {
  'Eva Light': light,
  'Eva Dark': dark,
  'App Theme': appTheme,
};

export const ThemeContext = React.createContext('Eva Light');

export default themes;
