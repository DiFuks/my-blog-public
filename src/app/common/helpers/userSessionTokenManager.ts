import uuidv4 from 'uuid/v4';

import { localStorageGet, localStorageSet } from '@app/common/helpers/localStorageData';
import { LocalStorageKeys } from '@app/common/constants';

export const generateUserSessionToken = () => localStorageSet(LocalStorageKeys.USER_SESSION_TOKEN, uuidv4());

export const getUserSessionToken = () => localStorageGet(LocalStorageKeys.USER_SESSION_TOKEN);
