import { Locales } from '@app/common/constants';
import { getBaseUrlByLocale } from '@app/common/helpers/getBaseUrlByLocale';

export const getUrlWithoutLocale = (locale: Locales) => {
  return window.location.pathname.replace(getBaseUrlByLocale(locale), '');
};
