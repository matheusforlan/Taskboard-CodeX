import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.button`
  width: 18.2rem;
  padding: 1.2rem;
  border: none;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${theme.colors.white};
  height: 3.5rem;
  font-weight: 400;
  gap: 1.5rem;
  background-color: ${theme.colors.blue[700]};
  &:hover {
    filter: brightness(80%);
  }
`;