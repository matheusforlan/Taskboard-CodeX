import Image from 'next/image';
import Link from 'next/link';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Container, LoginSection, Title, Greetings, Center, DecorativeSection } from './styles';
import AbstractSquare from '../../assets/abstract-squares.svg';
import PersonWithSmartphone from '../../assets/person-with-smartphone.svg';

const LoginPage = () => (
  <Container>
    <LoginSection>
      <Title>Login</Title>
      <Greetings>Seja bem vindo de volta!</Greetings>

      <Input label="Email" name="Email" placeholder="nome@dominio.com" />
      <Input label="Senha" name="Senha" placeholder="********" />

      <Button>Login</Button>

      <Center>
        <span>Não tem uma conta?</span>
        <Link href="/cadastro">Registre-se</Link>
      </Center>
    </LoginSection>
    <DecorativeSection>
      <Image src={PersonWithSmartphone} alt="Pessoa com Smartphone"/>
    </DecorativeSection>
  </Container>
);

export default LoginPage;