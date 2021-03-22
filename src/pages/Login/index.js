import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../services/mock/fakeDatabase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserToLogin } from '../../redux/slices/user';
import { Container, Content, Input } from './styles';
import { Button } from '../../components/Button/index';

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
  }, [user, history]);

  return (
    <Container>
      <Content>
        <h1>Job Timer</h1>
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

        <div className="buttonWrapper">
          <Button onClick={e => handleLogin(e)} type="submit">
            Entrar
          </Button>
        </div>
      </Content>
    </Container>
  );
}
