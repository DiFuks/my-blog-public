export const enum Types {
  MENU_CHANGE_HIDE = 'MENU_CHANGE_HIDE',
}

export const Creators = {
  menuChangeHide: (needHide: boolean) => ({
    needHide,
    type: Types.MENU_CHANGE_HIDE,
  } as const),
};
