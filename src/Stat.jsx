import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from 'react-icons/fi';

export default function Stat({ label, value, delta }) {
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py="4"
      textColor="gray.50"
      bg="rgba(211, 211, 211, 0.05)"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Stack>
        <HStack justify="space-between">
          <Text textStyle="sm" color="fg.muted">
            {label}
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Heading
            size={{ base: 'sm', md: 'md' }}
            color={delta.isUpwardsTrend ? 'green.500' : 'red.500'}
          >
            {delta.isUpwardsTrend ? '+' : '-'}
            {value}
          </Heading>

          <Badge
            variant="pill"
            bg={delta.isUpwardsTrend ? 'green.900' : 'red.900'}
            color={delta.isUpwardsTrend ? 'green.500' : 'red.500'}
          >
            <HStack spacing="1">
              <Icon
                as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              />
              <Text>{delta.value}</Text>
            </HStack>
          </Badge>
        </HStack>
      </Stack>
    </Box>
  );
}
