export const enum Types {
  LAYOUT_SET_TITLE = 'LAYOUT_SET_TITLE',
}

export const Creators = {
  layoutSetTitle: (title: string) => ({
    type: Types.LAYOUT_SET_TITLE,
    title: title,
  } as const),
};
