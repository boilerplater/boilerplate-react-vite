import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';
// import { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
// LocaleData polyfills
// import '@formatjs/intl-pluralrules/polyfill';
// import '@formatjs/intl-relativetimeformat/polyfill';
// import '@formatjs/intl-pluralrules/dist/locale-data/fil';
// import '@formatjs/intl-relativetimeformat/dist/locale-data/fil';

// Translations required
import enTranslations from '@/lib/i18next/locales/en';
import filTranslations from '@/lib/i18next/locales/fil';

/**
 * Get Messages
 * function getMessagesFromLocale(locale: string): Record<string, string>
 */
function getMessagesFromLocale(locale: string) {
  switch (locale) {
    case 'fil':
      return filTranslations;
    case 'en':
      return enTranslations;
    default:
      return {};
  }
}

/**
 * Update Locale - Action Creator
 */
const updateLocale = createAsyncThunk<
  string,
  string,
  {
    // dispatch: AppDispatch,
    state: RootState
  }
>('i18n/updateLocale', async (locale: string) => {
  try {
    const messages = getMessagesFromLocale(locale);
    const hasMessages = Object.keys(messages).length > 0 ? true : false;

    if (hasMessages) {
      return Promise.resolve(locale as string);
    } else {
      throw new Error('No locale found')
    }
  } catch (err) {
    return Promise.reject();
  }
});

export {
  updateLocale,
  getMessagesFromLocale
}
