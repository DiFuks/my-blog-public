export const setTitle = (title: string, postfix: string) => {
  document.title = title ? `${title} | ${postfix}` : postfix;
};
