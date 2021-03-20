import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { useLoginReducer } from "../../reducers/loginReducer";
import { makeLogin } from "../../services/Firebase/firebaseConfig";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Login() {
  const userStore = React.useContext(UserContext);

  const [userState, setUserState] = React.useState({
    email: "",
    password: ""
  });

  const handleInputUser = (event) =>
    setUserState({
      ...userState,
      [event.target.name]: event.target.value
    });

  function handleLogin() {
    makeLogin({ email: userState.email, password: userState.password });
  }

  console.log(userStore.state);

  return (
    <Container>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userState.email}
          onChange={handleInputUser}
          placeholder="Digite o seu email"
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          placeholder="Digite a sua senha"
          type="password"
          name="password"
          value={userState.password}
          onChange={handleInputUser}
        />
      </div>

      <button onClick={(e) => handleLogin(e)} type="submit">
        Enviar
      </button>
    </Container>
  );
}
