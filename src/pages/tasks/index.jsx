import Image from 'next/image';
import Link from 'next/link';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ButtonTasks from '../../components/common/ButtonTasks';
import { Container, SignUpSection, Title, Greetings, Center, ProfileSection, 
  SideBySideInput, Circle, Name, Buttons, SideBySideButtons, TasksSection, Order, OrderName} from './styles';
import AbstractSquare from '../../assets/abstract-squares.svg';
import ManWithScreens from '../../assets/man-with-screens.svg';
import ViniPicture from '../../assets/vini-picture.svg';
import PlusVector from '../../assets/plus-vector.svg';
import ProfileVector from '../../assets/profile-vector.svg';
import InfoVector from '../../assets/info-vector.svg';
import LogoutVector from '../../assets/logout-vector.svg';

const tasksPage = () => ( 

    <Container>

    <ProfileSection>

        <Circle> <Image src={ViniPicture} alt="Foto do Presida"/> </Circle>

        <Name>Vinícius Lins </Name>

        <Buttons>

          <SideBySideButtons>         
          <ButtonTasks> <Image src={PlusVector} alt="Plus"/>   Nova Tarefa</ButtonTasks>
          </SideBySideButtons>

          <SideBySideButtons>         
          <ButtonTasks> <Image src={ProfileVector} alt="Plus"/> Perfil</ButtonTasks>
          </SideBySideButtons>

          <SideBySideButtons>         
          <ButtonTasks> <Image src={InfoVector} alt="Plus"/> Sobre</ButtonTasks>
          </SideBySideButtons>

          <SideBySideButtons>
          <ButtonTasks><Image src={LogoutVector} alt="Plus"/> Logout</ButtonTasks>
          </SideBySideButtons>
                  
        </Buttons>
        
      
    </ProfileSection>

    <TasksSection>

      <Title>Tarefas</Title>
      <Greetings>Marque suas tarefas como concluídas, adicione novas tarefas
        ou edite as já existentes.</Greetings>

      <Order>
       <OrderName> Ordenar </OrderName> 
      </Order>
      
      <SideBySideInput>
      <Input label="Nome" name="Nome" />
      <Input label="Sobrenome" name="Sobrenome"/>
      </SideBySideInput>

      <Input label="E-mail" name="E-mail" placeholder="nome@dominio.com" />
      
      <SideBySideInput>
      <Input label="Senha" name="Senha" placeholder="********" />
      <Input label="Confirmar Senha" name = "Confirmar Senha" placeholder="********" />
      </SideBySideInput>

      <Button>Registrar</Button>

      <Center>
        <span>Já tem uma conta?</span>
        <Link href="/login">Faça login</Link>
      </Center>

    </TasksSection>
    
    </Container>
    



);


export default tasksPage;