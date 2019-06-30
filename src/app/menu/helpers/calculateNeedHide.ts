export const calculateNeedHide = (position: number) => {
  const windowPositionTop = document.body.getBoundingClientRect().top;

  const windowPositionBottom = document.body.getBoundingClientRect().bottom;

  if (windowPositionTop === 0 && windowPositionBottom - window.innerHeight === 0) {
    return false;
  }

  if (windowPositionTop < -50 && windowPositionTop < position) {
    return true;
  }

  if (windowPositionBottom - window.innerHeight < 100) {
    return true;
  }

  return false;
};
