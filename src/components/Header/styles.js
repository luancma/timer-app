import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #2b2e4a;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb743e;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  margin: 0px 1rem;

  aside {
    display: flex;
    align-items: center;

    strong {
      margin-right: 1rem;
    }
  }
`;
