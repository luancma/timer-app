import styled from 'styled-components';

const styleProps = {
  pause: {
    background: '#fb743e',
  },
  start: {
    background: '#2b2e4a',
  },
  break: {
    background: '#2b2e4a',
  },
  return: {
    background: '#fb743e',
  },
};

export const Card = styled.div`
  cursor: pointer;
  width: 300px;
  height: 240px;
  border-radius: 8px;
  color: #fff;
  background-color: ${props =>
    styleProps[props.type] && styleProps[props.type].background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: filter ease-in-out 0.2s;

  span {
    font-size: 2rem;
    font-weight: 600;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    filter: opacity(95%);
  }
`;
