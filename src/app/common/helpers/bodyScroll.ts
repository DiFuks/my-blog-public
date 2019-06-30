export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';

  document.body.style.height = '100%';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';

  document.body.style.height = null;
};
