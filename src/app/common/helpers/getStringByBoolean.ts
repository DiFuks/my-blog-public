import { StringBoolean } from '../constants';

export const getStringByBoolean = (value: boolean): StringBoolean => value ? StringBoolean.TRUE : StringBoolean.FALSE;
