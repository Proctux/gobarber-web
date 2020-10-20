import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <h1>Hello User!!</h1>
        <Button type="button" onClick={signOut}>
          Sair da Aplicação
        </Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
