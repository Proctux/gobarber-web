import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, HeaderContent, Header, Profile } from './styles';

import logoImg from '../../assets/logoImg.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  console.log(user.avatar_url);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;