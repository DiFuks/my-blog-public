import * as React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';

export const ChatMover: React.FC = ({children}) => {
  const rndInit = {
    width: '220px',
    height: '300px',
    x: document.body.clientWidth - 240,
    y: document.body.clientHeight - 340,
  };

  const [rndState, setRndState] = React.useState(rndInit);

  React.useEffect(() => {
    const onResize = () => {
      const parsedWidth = parseInt(rndState.width, 10);

      const parsedHeight = parseInt(rndState.height, 10);

      setRndState({
        ...rndState,
        x: (rndState.x + parsedWidth > document.body.clientWidth)
          ? document.body.clientWidth - parsedWidth : rndState.x,
        y: (rndState.y + parsedHeight > document.body.clientHeight)
          ? document.body.clientHeight - parsedHeight : rndState.y,
      });
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [rndState]);

  return (
    <RndWrapperStyled>
      <Rnd
        dragHandleClassName='head'
        default={rndInit}
        style={{width: rndState.width, height: rndState.height, zIndex: 1}}
        position={{ x: rndState.x, y: rndState.y }}
        onDragStop={(e, d) => {
          setRndState({
            ...rndState,
            x: d.x < 0 ? 0 : d.x,
            y: d.y < 0 ? 0 : d.y,
          });
        }}
        onResize={(e, direction, ref, delta, position) => {
          setRndState({
            ...rndState,
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }}
      >
        {children}
      </Rnd>
    </RndWrapperStyled>
  );
};

const RndWrapperStyled = styled(Flex)`
  position: absolute;
`;
