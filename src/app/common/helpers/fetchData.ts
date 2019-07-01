import defaultsDeep from 'lodash-es/defaultsDeep';

import { Locales } from '@app/common/constants';

export const fetchData = (url: string, options: any = {}, locale: Locales = DEFAULT_LOCALE as Locales) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return fetch(API_URL + url + `?locale=${locale}`, defaultsDeep(options, {
    headers,
  }));
};
