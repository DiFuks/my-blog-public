import { StringBoolean } from '@app/common/constants';

export const getStringByBoolean = (value: boolean): StringBoolean => value ? StringBoolean.TRUE : StringBoolean.FALSE;
