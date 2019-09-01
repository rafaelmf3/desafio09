import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="MeetApp" />
        </Link>

        <aside>
          <div>
            <p>{profile.name}</p>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <button type="submit" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
