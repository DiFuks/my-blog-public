import { ajax as rxjxAjax } from 'rxjs/ajax';
import { defaultsDeep } from 'lodash-es';

import { Locales } from '@app/common/constants';
import { getUserSessionToken } from '@app/common/helpers/userSessionTokenManager';

export const getJson = <T>(url: string, options: any = {}, locale: Locales = DEFAULT_LOCALE as Locales) => {
  const headers = {
    'Locale': locale,
    'x-session-token': getUserSessionToken(),
  };

  return rxjxAjax.getJSON<T>(API_URL + url, defaultsDeep(options, headers));
};
