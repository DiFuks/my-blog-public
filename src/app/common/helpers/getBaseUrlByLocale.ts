import { Locales } from '@app/common/constants';

export const getBaseUrlByLocale = (locale: Locales) => locale !== DEFAULT_LOCALE ? `/${locale}` : '';
