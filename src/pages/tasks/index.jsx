import Image from 'next/image';
import Link from 'next/link';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ButtonTasks from '../../components/common/ButtonTasks';
import SelectButton from '../../components/common/SelectButton';
import TaskButton from '../../components/common/TaskButton';
import { Container, SignUpSection, Title, Greetings, Center, ProfileSection, 
  SideBySideInput, Circle, Name, Buttons, SideBySideButtons, TasksSection, Order,
   OrderName, SideBySideOrder, Select, PrioritySection, Tasks, VerticalTasks} from './styles';
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
       
       <SideBySideOrder> 
        <OrderName> Ordenar </OrderName>
        <Select> </Select>
       </SideBySideOrder>

        
        <PrioritySection>

        <SelectButton>
          <option value = "masculino">Alta</option>
          <option value = "masculino">Baixa</option>
        </SelectButton>
        </PrioritySection>     

      </Order>


      <Tasks>
        <VerticalTasks>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
        </VerticalTasks>

        <VerticalTasks>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
        </VerticalTasks>

        <VerticalTasks>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
          <TaskButton> </TaskButton>
        </VerticalTasks>


        
      </Tasks>



    </TasksSection>
    
    </Container>
    



);


export default tasksPage;