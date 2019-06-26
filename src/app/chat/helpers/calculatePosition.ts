export const calculatePositionOnMove = (pos: number, size: string, windowSize: number): number => {
  const parseSize = parseInt(size, 10);

  if (pos < 0) {
    return 8;
  } else if (pos + parseSize > windowSize) {
    return windowSize - parseSize - 10;
  } else {
    return pos;
  }
};

export const calculatePositionOnPageResize = (pos: number, size: string, windowSize: number): number => {
  const parseSize = parseInt(size, 10);

  if (pos + parseSize > windowSize) {
    return windowSize - parseSize;
  } else {
    return pos;
  }
};
