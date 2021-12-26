import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  min-width: 300px;
  max-width: 1366px;
  min-height: 100vh; 
  padding: 2.8rem;
  display: grid;  
  grid-template-columns: 55% 45%;
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

export const SignUpSection = styled.section`
  height: 100%;
  padding: 7.2rem;
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
  font-size: 3.6rem;
  color: ${theme.colors.blue[700]};
`;

export const Greetings = styled.p`
  font-size: 1.8rem;
  color: ${theme.colors.blue[400]};
  margin-bottom: 1.5rem;
`;

export const DecorativeSection = styled.section`
  height: 100%;
  border-radius: 3.2rem 0 0 3.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue[500]};
  @media (max-width: 800px) {
    display: none;
  }
`;