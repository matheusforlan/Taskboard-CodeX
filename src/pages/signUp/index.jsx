import Image from 'next/image';
import Link from 'next/link';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Container, SignUpSection, Title, Greetings, Center, DecorativeSection, SideBySideInput } from './styles';
import AbstractSquare from '../../assets/abstract-squares.svg';
import ManWithScreens from '../../assets/man-with-screens.svg';


const signUpPage = () => ( 

    <Container>

    <DecorativeSection>
      <Image src={ManWithScreens} alt="Homem com telas"/>
    </DecorativeSection>

    <SignUpSection>

      <Title>Registre-se</Title>
      <Greetings>E gerencie suas atividades com eficiência!</Greetings>
      
      <SideBySideInput>
      <Input label="Nome" name="Nome" />
      <Input label="Sobrenome" name="Sobrenome"/>
      </SideBySideInput>

      <Input label="Email" name="Email" placeholder="nome@dominio.com" />
      
      <SideBySideInput>
      <Input label="Senha" name="Senha" placeholder="********" />
      <Input label="Confirmar Senha" name = "Confirmar Senha" placeholder="********" />
      </SideBySideInput>

      <Button>Registrar</Button>

      <Center>
        <span>Já tem uma conta?</span>
        <Link href="/login">Faça login</Link>
      </Center>
    </SignUpSection>
    
    </Container>
    



);


export default signUpPage;

