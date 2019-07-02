import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeRu from 'react-intl/locale-data/ru';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Locales } from '@app/common/constants';
import { getBaseUrlByLocale } from '@app/common/helpers/getBaseUrlByLocale';
import { redirectToUserLocale } from '@app/common/helpers/redirectToUserLocale';

import messagesRu from '@translations/ru.json';
import messagesEn from '@translations/en.json';

addLocaleData([...localeRu, ...localeEn]);

const messages = {
  [Locales.RU]: messagesRu,
  [Locales.EN]: messagesEn,
};

export const BaseRouter: React.FC = ({children}) => {
  React.useEffect(() => {
    redirectToUserLocale();
  }, []);

  return (
    <Switch>
      {Object.values(Locales).map((key: Locales) => (
        <Route
          key={key}
          path={getBaseUrlByLocale(key)}
          component={() => (
            <BrowserRouter
              basename={getBaseUrlByLocale(key)}
            >
              <IntlProvider
                locale={key}
                messages={messages[key]}
              >
                {children}
              </IntlProvider>
            </BrowserRouter>
          )}/>
      ))}
    </Switch>
  );
};
