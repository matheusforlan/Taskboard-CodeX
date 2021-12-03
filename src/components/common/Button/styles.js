import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 700;
  background-color: ${theme.colors.blue[500]};
  &:hover {
    filter: brightness(80%);
  }
`;