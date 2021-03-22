import styled from 'styled-components';

export const CardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, auto);
  }
`;
