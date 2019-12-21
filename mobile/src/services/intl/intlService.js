import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './messages/en';

i18n.fallbacks = true;
i18n.translations = { en };
i18n.locale = Localization.locale;

export default i18n;
