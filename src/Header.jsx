import React from 'react';
import { Box, Spacer, Stack, Text, Center, Tag } from '@chakra-ui/react';

export default function Header({ title, subtitle }) {
  return (
    <Box
      bg="rgba(211, 211, 211, 0.05)"
      mx="auto"
      w="100%"
      borderTopRadius="8"
      py="3"
      px="2"
      h="75px"
    >
      <Stack direction="row">
        <Stack spacing="1" color="gray.50">
          <Text textStyle="lg" fontWeight="medium">
            {title}
          </Text>
          <Text textStyle="sm" fontWeight="light">
            {subtitle ? subtitle : '-'}
          </Text>
        </Stack>
        <Spacer />
        <Center>
          <Stack spacing="1" direction="vertical" color="gray.50">
            <Tag
              bg="gray.900"
              textColor="gray.500"
              cursor="pointer"
              _hover={{ bg: 'gray.700' }}
            >
              Last 30 days
            </Tag>
            <Tag
              bg="gray.900"
              textColor="gray.500"
              cursor="pointer"
              _hover={{ bg: 'gray.700' }}
            >
              Last 7 days
            </Tag>
            <Tag
              bg="blue.900"
              textColor="blue.500"
              cursor="pointer"
              _hover={{ bg: 'gray.700' }}
            >
              Today
            </Tag>
          </Stack>
        </Center>
      </Stack>
    </Box>
  );
}
