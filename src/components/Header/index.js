import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/user';
import { Button } from '../Button/index';
import { Container, Content } from './styles';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
    <Container>
      <Content>
        <h3>Timer App</h3>
        <aside>
          <strong>{user.name}</strong>
          <Button type="button" onClick={() => dispatch(logout())}>
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
};
