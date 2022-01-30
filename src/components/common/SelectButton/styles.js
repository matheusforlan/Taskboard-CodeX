import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.select`
  width: 100%;
  height: 2.7rem;
  border: none;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.blue[700]};
  font-weight: 700;
  background-color: #EFEEF9;
  &:hover {
    filter: brightness(90%);
  }
`;