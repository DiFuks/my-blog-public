import { StringBoolean } from './constants';

export const getStringByBoolean = (value: boolean) => value ? StringBoolean.TRUE : StringBoolean.FALSE;
