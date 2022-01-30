import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.button`
  width: 243.14px;
  height: 51px;
  padding: 1.2rem;
  border: 0.5px solid #C7C7C7;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.blue[700]};
  font-weight: 700;
  background-color: ${theme.colors.white};

  &:hover {
    filter: brightness(80%);
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;