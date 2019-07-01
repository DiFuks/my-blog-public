import { Locales } from '@app/common/constants';
import { IRootState } from '@app/reducers';

export const getLocale = (state: IRootState): Locales => state.layout.locale;
