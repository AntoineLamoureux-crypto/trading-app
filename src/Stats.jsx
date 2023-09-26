import { Box, SimpleGrid } from '@chakra-ui/react';
import Stat from './Stat';

const stats = [
  {
    label: 'Today',
    value: '432,53 $',
    delta: { value: '1.5%', isUpwardsTrend: true },
  },
  {
    label: 'Total profit',
    value: '12,342 $',
    delta: { value: '34.56%', isUpwardsTrend: true },
  },
  {
    label: 'Last trade',
    value: '34,45 $',
    delta: { value: '2.3%', isUpwardsTrend: false },
  },
];

export default function Stats() {
  return (
    <Box py="4">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
        {stats.map((stat, id) => (
          <Stat
            key={id}
            label={stat.label}
            value={stat.value}
            delta={stat.delta}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
