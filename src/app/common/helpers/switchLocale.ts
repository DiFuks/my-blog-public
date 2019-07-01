import { Locales, LocalStorageKeys } from '@app/common/constants';
import { localStorageSet } from '@app/common/helpers/localStorageData';

export const switchLocale = (locale: Locales) => {
  localStorageSet(LocalStorageKeys.LOCALE, locale);

  window.location.reload();
};
