import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.header`
  width: 100%;
  height: 56px;
  background: ${COLORS.primaryDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
  font-weight: bold;
`;
