import { IconStar, IconStarFilled } from '@tabler/icons-react';

import { Flex } from '@/components/Flex';

export const Rating: React.FC<{
  count: 1 | 2 | 3 | 4 | 5;
}> = ({ count }) => {
  const emptyCount = 5 - count;

  return (
    <Flex $align="center">
      {new Array(count).fill(undefined).map((_, i) => (
        <IconStarFilled size={16} key={i} />
      ))}
      {new Array(emptyCount).fill(undefined).map((_, i) => (
        <IconStar size={16} key={i} />
      ))}
    </Flex>
  );
};
