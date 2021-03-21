import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import '../../services/mock/fakeDatabase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserToLogin, increment } from '../../redux/slices/user';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.div`
  border: 1px solid purple;
  font-size: 1rem;
  border-radius: 0.35rem;
  box-shadow: ${props => props.isFocus && `0px 0px 0px 1px purple`};

  label {
    margin-left: 0.5rem;
  }

  input {
    width: 18.75rem;
    border: none;
    margin: 0.5rem;

    &:hover,
    &:active,
    &:focus {
      border: none;
      outline: none;
    }
  }

  & ~ & {
    margin-top: 0.5rem;
  }

  &:hover {
    box-shadow: 0px 0px 0px 1px purple;
  }
`;

export function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const history = useHistory();
  const [isFocus, setIsFocus] = React.useState({
    name: '',
    active: false,
  });

  const [userState, setUserState] = React.useState({
    email: '',
    password: '',
  });

  const handleInputUser = event =>
    setUserState({
      ...userState,
      [event.target.name]: event.target.value,
    });

  async function handleLogin() {
    dispatch(
      fetchUserToLogin({
        email: userState.email,
        password: userState.password,
      }),
    );
  }

  const handleFocusIn = event => {
    setIsFocus({
      name: event.target.name,
      active: true,
    });
  };

  const handleFocusOut = () => {
    setIsFocus({
      name: '',
      active: false,
    });
  };

  React.useEffect(() => {
    if (user.isLoged) {
      history.push('/logado');
    }
  }, [user]);

  return (
    <Container>
      <h1>Login</h1>
      <Input isFocus={isFocus.name === 'email'}>
        <label>Email</label>
        <input
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          type="email"
          name="email"
          value={userState.email}
          onChange={handleInputUser}
          placeholder="Digite o seu email"
        />
      </Input>
      <Input isFocus={isFocus.name === 'password'}>
        <label>Senha</label>
        <input
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          placeholder="Digite a sua senha"
          type="password"
          name="password"
          value={userState.password}
          onChange={handleInputUser}
        />
      </Input>

      <button onClick={e => handleLogin(e)} type="submit">
        Enviar
      </button>
    </Container>
  );
}
