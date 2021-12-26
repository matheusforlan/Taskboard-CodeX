import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  min-width: 300px;
  max-width: 1366px;
  min-height: 100vh; 
  padding: 2.8rem;
  display: grid;  
  grid-template-columns: 34% 66%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    grid-template-columns: 36% 64%;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 46% 54%;
  }
  
  @media (max-width: 980px) {
    grid-template-columns: 64% 36%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const LoginSection = styled.section`
  height: 100%;
  padding: 7.2rem;
  border-radius: 3.2rem 0 0 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  background-color: ${theme.colors.white};
  @media (max-width: 1280px) {
    padding-right: 5.4rem;
    padding-left: 5.4rem;
  }
  @media (max-width: 880px) {
    padding-right: 4.8rem;
    padding-left: 4.8rem;
  }
  @media (max-width: 800px) {
    border-radius: 3.2rem;
  }
  @media (max-width: 430px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
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
  margin-bottom: 3.5rem;
`;

export const DecorativeSectionLogin = styled.section`
  height: 100%;
  border-radius: 0 3.2rem 3.2rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue[500]};
  @media (max-width: 800px) {
    display: none;
  }
`;
