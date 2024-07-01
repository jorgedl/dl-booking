import { IconStar, IconStarFilled } from '@tabler/icons-react';

import { Flex } from '@/components/Flex';

export const Rating: React.FC<{
  rating: number;
  count: number;
}> = ({ rating, count }) => {
  if (typeof rating !== 'number') {
    return null;
  }

  let safeRating = rating;

  if (rating > 5) {
    safeRating = 5;
  } else if (rating < 1) {
    safeRating = 1;
  }

  const emptyCount = 5 - safeRating;

  return (
    <Flex $align="center">
      {new Array(safeRating).fill(undefined).map((_, i) => (
        <IconStarFilled size={16} key={i} />
      ))}
      {new Array(emptyCount).fill(undefined).map((_, i) => (
        <IconStar size={16} key={i} />
      ))}
      {typeof count === 'number' && count > 0 && `(${count})`}
    </Flex>
  );
};
