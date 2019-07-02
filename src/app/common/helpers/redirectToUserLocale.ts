import { getLocaleFromDevice } from '@app/common/helpers/getLocaleFromDevice';
import { getUrlByLocale } from '@app/common/helpers/getUrlByLocale';
import { Locales } from '@app/common/constants';

export const redirectToUserLocale = () => {
  const localeFromDevice = getLocaleFromDevice();

  if (localeFromDevice === DEFAULT_LOCALE) {
    return;
  }

  const parsedUrl = window.location.pathname.match(/^\/(?<locale>.*?)?(?<url>\/.*)?$/);

  const isLocaleInUrl = Object.values(Locales).includes(parsedUrl.groups.locale);

  if (!isLocaleInUrl) {
    const baseUrl = parsedUrl[0] || '';

    window.location.pathname = getUrlByLocale(localeFromDevice) + baseUrl;
  }
};
