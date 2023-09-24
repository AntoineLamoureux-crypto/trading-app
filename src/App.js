import React from 'react';
import { Flex, Stack, Box } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import NavBar from './NavBar';

export default function App() {
  return (
    <Flex
      direction="column"
      bg="rgba(000, 000, 000, 1)"
      maxH="100vh"
      minH="100vh"
    >
      <Box
        bg="rgba(211, 211, 211, 0.05)"
        px="40px"
        borderBottomRadius="20px"
        mx="10px"
      >
        <NavBar />
      </Box>
      <Stack overflow="hidden" pb="10px" mx="40px">
        <Dashboard />
      </Stack>
    </Flex>
  );
}
