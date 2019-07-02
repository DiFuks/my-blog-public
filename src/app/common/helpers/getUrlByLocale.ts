import { Locales } from '@app/common/constants';

export const getUrlByLocale = (locale: Locales) => locale !== DEFAULT_LOCALE ? `/${locale}` : '/';
