import Image from 'next/image';
import Link from 'next/link';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Container, LoginSection, Title, Greetings, Center, DecorativeSectionLogin } from './styles';
import AbstractSquare from '../../assets/abstract-squares.svg';
import PersonWithSmartphone from '../../assets/person-with-smartphone.svg';

const LoginPage = () => (
  <Container>
    
    <LoginSection>

      <Title>Login</Title>

      <Greetings>Seja bem-vindo de volta!</Greetings>

      <Input label="Email" name="Email" placeholder="nome@dominio.com" />
      <Input label="Senha" name="Senha" placeholder="********" />

      <Button>Login</Button>

      <Center>
        <span>Não tem uma conta?</span>
        <Link href="/signUp">Registre-se</Link>
      </Center>

    </LoginSection>

    <DecorativeSectionLogin>
      <Image src={PersonWithSmartphone} alt="Pessoa com Smartphone"/>
      <Image src={AbstractSquare} alt="Quadrados abstratos"/>
    </DecorativeSectionLogin>

  </Container> 
);

export default LoginPage;