import * as React from 'react';
import { Rnd } from 'react-rnd';

import { calculatePositionOnMove, calculatePositionOnPageResize } from './helpers/calculatePosition';

const CHAT_WIDTH = 240;

const CHAT_HEIGHT = 300;

export const ChatMover: React.FC = React.memo(({children}) => {
  const rndInit = {
    width: `${CHAT_WIDTH}px`,
    height: `${CHAT_HEIGHT}px`,
    x: document.body.clientWidth - CHAT_WIDTH - 20,
    y: document.body.clientHeight - CHAT_HEIGHT - 20,
  };

  const [rndState, setRndState] = React.useState(rndInit);

  React.useEffect(() => {
    const onResize = () => {
      setRndState({
        ...rndState,
        x: calculatePositionOnPageResize(rndState.x, rndState.width, document.body.clientWidth),
        y: calculatePositionOnPageResize(rndState.y, rndState.height, document.body.clientHeight),
      });
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [rndState]);

  return (
    <Rnd
      dragHandleClassName='head'
      default={rndInit}
      minWidth={CHAT_WIDTH}
      minHeight={CHAT_HEIGHT}
      style={{width: rndState.width, height: rndState.height, zIndex: 1}}
      position={{ x: rndState.x, y: rndState.y }}
      onDragStop={(e, d) => {
        setRndState({
          ...rndState,
          x: calculatePositionOnMove(d.x, rndState.width, document.body.clientWidth),
          y: calculatePositionOnMove(d.y, rndState.height, document.body.clientHeight),
        });
      }}
      onResize={(e, direction, ref, delta, position) => {
        setRndState({
          ...rndState,
          width:  ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
    >
      {children}
    </Rnd>
  );
});
