import { Locales, LocalStorageKeys } from '@app/common/constants';
import { localStorageGet } from '@app/common/helpers/localStorageData';

export const getLocaleFromDevice = (): Locales => {
  const localeFromDevice = (localStorageGet(LocalStorageKeys.LOCALE) ||
    navigator.language.split(/[-_]/)[0]) as Locales;

  if (Object.values(Locales).includes(localeFromDevice)) {
    return localeFromDevice;
  }

  return DEFAULT_LOCALE as Locales;
};
