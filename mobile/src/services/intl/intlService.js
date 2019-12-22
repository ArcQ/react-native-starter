import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from 'messages/en';

export default {
  isInit: false,
  init() {
    i18n.fallbacks = true;
    i18n.translations = { en };
    i18n.locale = Localization.locale;
    this.isInit = true;
  },
  translate(scope) {
    if (!this.isInit) {
      this.init();
    }
    return k => i18n.t(`${scope}.${k}`);
  },
};
