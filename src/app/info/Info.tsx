import * as React from 'react';
import { Box, Flex } from 'grid-styled';

export const Info: React.FunctionComponent<{}> = () => (
  <Flex
    flexDirection={'column'}
  >
    <Box
      fontSize={'25px'}
      mb={'20px'}
    >
      Привет!
    </Box>
    <Box
      mb={'20px'}
    >
      <p>Этот сайт был сделан в качестве портфолио.</p>
      <p>Но не хочется, чтобы он был совсем без души.</p>
      <p>Поэтому тут я буду рассказывать о своём знакомстве с программированием, различными языками и технологиями.</p>
    </Box>
    <Box>А может ещё что-то.</Box>
  </Flex>
);
