import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 15px 5px;
  border: none;
  background: ${COLORS.primary};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
  margin-left: 10px;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    background: ${COLORS.primaryDark};
  }
`;

export const InputBoard = styled.input`
  display: flex;
  font-family: Inter;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  padding: 15px 5px;
  border: none;
  background: ${COLORS.primaryDark};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${COLORS.light};
  margin-left: 10px;
  transition: 0.3s all;
  cursor: pointer;

  &:focus {
    outline: none;
    background: ${COLORS.primary};
  }

  &:hover {
    background: ${COLORS.primary};
  }
`;

export const SaveButton = styled.button`
  display: flex;
  font-family: Inter;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px 5px;
  border: none;
  background: ${COLORS.primary};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${COLORS.light};
  transition: 0.3s all;
  cursor: pointer;
  margin-left: 10px;

  &:hover:disabled {
    background: ${COLORS.successDisabled};
    cursor: not-allowed;
  }

  &:hover {
    background: ${COLORS.success};
  }
`;

export const CancelButton = styled.button`
  display: flex;
  font-family: Inter;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px 5px;
  border: none;
  background: ${COLORS.primary};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${COLORS.light};
  transition: 0.3s all;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: ${COLORS.error};
  }
`;

export const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;
