import io from 'socket.io-client';

import { SocketEvents } from '@app/common/constants/socketEvents';

export const onBotRequestCallback = (id: string, botCallback: () => void) => {
  const socket = io(SOCKET_URL, {
    query: {
      id: id,
    },
  });

  socket.on(SocketEvents.BOT_REQUEST_CALLBACK, botCallback);
};
