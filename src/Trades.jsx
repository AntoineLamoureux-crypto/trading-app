import {
  Spacer,
  Box,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
  Icon,
  Badge,
  Tag,
} from '@chakra-ui/react';
import { BsCalendarFill } from 'react-icons/bs';

export default function Trades({ title, data }) {
  return (
    <VStack w="100%">
      <Box
        bg="rgba(211, 211, 211, 0.05)"
        py="4"
        borderBottomRadius="8"
        w="100%"
      >
        <Stack
          divider={<StackDivider />}
          color="gray.50"
          borderColor="gray.900"
          spacing="5"
        >
          {data.map(member => (
            <Stack key={member.id} fontSize="sm" px="4" spacing="4">
              <Stack direction="row" justify="space-between" spacing="4">
                <HStack spacing="3">
                  <Badge
                    colorScheme={member.status === 'active' ? 'green' : 'red'}
                    bg={member.status === 'active' ? 'green.900' : 'red.900'}
                    textColor={
                      member.status === 'active' ? 'green.500' : 'red.500'
                    }
                  >
                    {member.status === 'active' ? 'Buy' : 'Sell'}
                  </Badge>
                  <Box>
                    <HStack>
                      <Text
                        fontWeight="medium"
                        color="fg.emphasized"
                        fontSize="lg"
                        borderRadius="3"
                      >
                        VEQT
                      </Text>
                    </HStack>
                    <HStack>
                      <Icon as={BsCalendarFill} fontSize="sm" />
                      <Text fontWeight="thin">2023-09-24</Text>
                    </HStack>
                  </Box>
                </HStack>
                <Spacer />
                <Text color="fg.muted" fontWeight="light">
                  {member.lastSeen}
                </Text>
              </Stack>
              <Stack direction="row">
                <Tag
                  color="inherit"
                  bg="green.900"
                  textColor="green.400"
                  borderRadius="2"
                  mr="2"
                  size="sm"
                >
                  +258,43 $
                </Tag>
                <Tag
                  color="inherit"
                  bg="blue.900"
                  textColor="blue.400"
                  borderRadius="2"
                  mr="2"
                  size="sm"
                >
                  4,21 %
                </Tag>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </VStack>
  );
}
