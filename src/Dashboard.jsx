import React from 'react';
import { Stack, Flex } from '@chakra-ui/react';
import Stats from './Stats';
import Header from './Header';
import Trades from './Trades.jsx';
import { members } from './members';
import { memberss } from './memberss';

export default function Dashboard() {
  return (
    <>
      <Stats />
      <Stack direction="horizontal">
        <Header title="Open Trades" subtitle="On going trades." />
        <Header title="Closed Trades" />
      </Stack>
      <Flex
        w="100%"
        h="100%"
        gap="2"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '2px',
          },
        }}
        overflowX="hidden"
      >
        <Trades title="Open trades" data={members} />

        <Trades title="Closed trades" data={memberss} />
      </Flex>
    </>
  );
}
