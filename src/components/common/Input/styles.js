import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  label {
    margin-bottom: 0.8rem;
    color: ${theme.colors.blue[400]};
    font-weight: 500;
  } 
`;

export const BaseInput = styled.input`
  padding: 1rem; 
  border-radius: 0.7rem;
  border: 1px solid ${theme.colors.blue[400]};
  outline: none;
  color: ${theme.colors.blue[700]};
  transition: border-color 0.15s,
    box-shadow 0.15s, border-color 0.15s;
  &::placeholder {
    color: ${theme.colors.blue[400]};
    opacity: 0.6;
  }
  &:focus {
    border-color: ${theme.colors.blue[500]};
    box-shadow: 0px 0px 0px 1px ${theme.colors.blue[500]};
  }
`;
