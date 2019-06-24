import { LocalStorageKeys } from '@app/common/constants';

export const localStorageSet = (key: LocalStorageKeys, data: string): void => {
  localStorage.setItem(key, data);
};

export const localStorageGet = (key: LocalStorageKeys): string => localStorage.getItem(key);

export const localStorageRemove = (key: LocalStorageKeys): void => {
  localStorage.removeItem(key);
};
