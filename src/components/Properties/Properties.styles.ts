import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--item-width), 1fr));
  gap: var(--margin-lg);
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SkeletonItem = styled.div`
  position: absolute;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;
