import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #fb743e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 400px;
  height: 300px;
  background: #383e56;
  border-radius: 0.5rem;
  padding: 16px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }

  .buttonWrapper {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem;
  }
`;

export const Input = styled.div`
  border: 1px solid purple;
  font-size: 1rem;
  border-radius: 0.35rem;
  box-shadow: ${props => props.isFocus && `0px 0px 0px 1px purple`};
  color: #fff;
  background-color: #fb743e;
  font-size: 1rem;

  label {
    margin-left: 0.5rem;
  }

  input {
    width: 18.75rem;
    border: none;
    margin: 0.5rem;
    background-color: #fb743e;
    color: #fff;
    font-size: 0.9rem;

    &:hover,
    &:active,
    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      background: #fb743e !important;
      color: #fff !important;
    }

    @media (max-width: 375px) {
      width: 224px;
    }
  }

  & ~ & {
    margin-top: 0.5rem;
  }

  &:hover {
    box-shadow: 0px 0px 0px 1px purple;
  }
`;
