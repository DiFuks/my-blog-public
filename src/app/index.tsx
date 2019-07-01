import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeRu from 'react-intl/locale-data/ru';

import { Locales } from '@app/common/constants';
import { getLocaleFromDevice } from '@app/common/helpers/getLocaleFromDevice';

import messagesRu from '@translations/ru.json';
import messagesEn from '@translations/en.json';

import { App } from './App';

addLocaleData([...localeRu, ...localeEn]);

const messages = {
  [Locales.RU]: messagesRu,
  [Locales.EN]: messagesEn,
};

const locale = getLocaleFromDevice();

ReactDOM.render(
  <IntlProvider
    locale={locale}
    messages={messages[locale]}
  >
    <App/>
  </IntlProvider>,
  document.getElementById('app'),
);
