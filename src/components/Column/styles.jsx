import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  margin: 8px;
  border: 1px solid;
  border-color: ${COLORS.secondary};
  background-color: ${COLORS.primary};
  border-radius: 10px;
  padding: 5px;
  min-width: 350px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 30px;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

export const Title = styled.h3`
  color: ${COLORS.light};
  text-align: left;
  font-weight: bold;
  margin: 5px;
  font-familt: Inter;
`;

export const TaskList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  background: ${COLORS.primaryDark};
  height: 100%;
  border-radius: 10px;
  transition: 0.3s all;
`;

export const DeleteButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${COLORS.secondary};
  background-color: ${COLORS.primary};
  transition: 0.3s all;
  cursor: pointer;
  color: ${COLORS.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${COLORS.error};
  }
`;
