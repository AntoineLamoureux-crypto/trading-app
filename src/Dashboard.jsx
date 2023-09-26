import React from 'react';
import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import Stats from './Stats';
import Header from './Header';
import Trades from './Trades.jsx';
import { members } from './members';
import { memberss } from './memberss';

export default function Dashboard() {
  return (
    <>
      <Stats />

      <Flex
        w="100%"
        h="100%"
        gap="2"
        overflowY="auto"
        direction="horizontal"
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
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5" w="100%">
          <Box>
            <Header title="Open Trades" subtitle="On going trades." />
            <Trades title="Open trades" data={members} />
          </Box>
          <Box>
            <Header title="Closed Trades" />
            <Trades title="Closed trades" data={memberss} />
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
}
