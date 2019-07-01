import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeRu from 'react-intl/locale-data/ru';

import { Locales, LocalStorageKeys } from '@app/common/constants';
import { localStorageGet } from '@app/common/helpers/localStorageData';

import messagesEn from '@translations/en.json';
import messagesRu from '@translations/ru.json';

import { App } from './App';

addLocaleData([...localeEn, ...localeRu]);

const messages = {
  [Locales.RU]: messagesRu,
  [Locales.EN]: messagesEn,
};

const language = (localStorageGet(LocalStorageKeys.LOCALE) || navigator.language.split(/[-_]/)[0]) as Locales;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App/>
  </IntlProvider>,
  document.getElementById('app'),
);
