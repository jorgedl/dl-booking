import styled from 'styled-components';

export const Label = styled.div`
  font-weight: 600;
`;

export const Description = styled.p`
  color: var(--text-secondary);
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: var(--margin-md);

  > img {
    position: absolute;
    top: 0;
  }
`;

export const Price = styled.div`
  margin-top: var(--margin-sm);
`;
