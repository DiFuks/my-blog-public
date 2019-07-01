import { Locales } from '@app/common/constants';

export const enum Types {
  LAYOUT_SET_TITLE = 'LAYOUT_SET_TITLE',
  LAYOUT_SET_LOCALE = 'LAYOUT_SET_LOCALE',
}

export const Creators = {
  layoutSetTitle: (title: string) => ({
    type: Types.LAYOUT_SET_TITLE,
    title: title,
  } as const),
  layoutSetLocale: (locale: Locales) => ({
    type: Types.LAYOUT_SET_LOCALE,
    locale: locale,
  } as const),
};
