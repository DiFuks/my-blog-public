import defaultsDeep from 'lodash-es/defaultsDeep';

import { Locales } from '@app/common/constants';
import { getUserSessionToken } from '@app/common/helpers/userSessionTokenManager';

export const fetchData = (url: string, options: any = {}, locale: Locales = DEFAULT_LOCALE as Locales) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Locale': locale,
    'x-session-token': getUserSessionToken(),
  };

  return fetch(API_URL + url, defaultsDeep(options, {
    headers,
  }));
};
