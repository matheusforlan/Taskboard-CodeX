import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  min-width: 300px;
  max-width: 1366px;
  min-height: 100vh; 
  padding: 2.8rem;
  display: grid;  
  grid-template-columns: 27% 73%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    grid-template-columns: 53% 47%;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 43% 57%;
  }
  
  @media (max-width: 980px) {
    grid-template-columns: 30% 70%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const TasksSection = styled.section`
  height: 100%;
  padding: 4.2rem;
  border-radius: 0 3.2rem 3.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  position: static;
  background-color: ${theme.colors.white};
  @media (max-width: 1280px) {
    padding-right: 7rem;
    padding-left: 7rem;
  }
  @media (max-width: 1100px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }

  @media (max-width: 1000px) {
    padding-right: 8.7rem;
    padding-left: 8.7rem;
  }
  @media (max-width: 880px) {
    padding-right: 8rem;
    padding-left: 8rem;
  }
  @media (max-width: 800px) {
    border-radius: 3.2rem;
    padding-left: 20rem;
    padding-right: 20rem;
  }
  @media (max-width: 430px) {
    padding-left: 4.2rem;
    padding-right: 4.2rem;
    gap: 1.8rem;
  }

  @media (max-width: 330px) {
    padding-left: 25.2rem;
    padding-right: 5.2rem;
    gap: 1.8rem;
  }
`;

export const SideBySideInput = styled.section`
  height: 100%;
  padding: 0rem;
  border-radius: 0 3.2rem 3.2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: static;
  gap: 1.4rem;
  background-color: ${theme.colors.white};
  @media (max-width: 1280px) {
    padding-right: 5.4rem;
    padding-left: 5.4rem;
  }

  @media (max-width: 1100px) {
    padding-right: 5.2rem;
    padding-left: 5.2rem;
  }

  @media (max-width: 1000px) {
    padding-right: 0rem;
    padding-left: 0rem;
  }
  @media (max-width: 880px) {
    padding-right: 0rem;
    padding-left: 0rem;
  }
  @media (max-width: 800px) {
    border-radius: 3.2rem;
    padding-left: 0rem;
    padding-right: 0rem;
    gap: 1.8rem;
  }

`;

export const SideBySideButtons = styled.section`
  
  position: relative;
  display: flex;
  flex-direction: row;
  left: 5rem;
  

`;

export const Buttons = styled.section`
  
  position: absolute;
  width: 132px;
  height: 166.4px;
  left: 0rem;
  top: 321px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${theme.colors.blue[400]};
  }
  a {
    color: ${theme.colors.blue[500]};
    text-decoration: none;
    font-weight: 700;
    margin-left: 0.3rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: ${theme.colors.blue[700]};
`;

export const Name = styled.h1`

  position: absolute;
  width: 13.1rem;
  height: 5.25rem;
  left: 5.25rem;
  top: 19.7rem;

  font-size: 3.6rem;
  color: ${theme.colors.white};
`;

export const Greetings = styled.p`
  font-size: 1.8rem;
  color: ${theme.colors.blue[400]};
  margin-bottom: 1.5rem;
  width: 49.6rem;
`;

export const Circle = styled.p`
position: absolute;
width: 70px;
height: 70px;
left: 130px;
top: 78px;

border: 3px solid #3F4E7C;
box-sizing: border-box;
border-radius: 0.2rem;

`;

export const Order = styled.p`
position: absolute;
width: 295.3px;
height: 79px;
left: 970px;
top: 83px;



`;

export const OrderName = styled.p`

position: absolute;
width: 6.4rem;
height: 5.25rem;
font-size: 1.8rem;
color: ${theme.colors.blue[400]};

`;

export const ProfileSection = styled.section`
  height: 100%;
  border-radius: 3.2rem 0 0 3.2rem;
  top: -3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue[700]};
  @media (max-width: 800px) {
    display: none;
  }
`;