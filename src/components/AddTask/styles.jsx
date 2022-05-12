import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const AddButton = styled.button`
  font-familt: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 5px;
  border: none;
  background: ${COLORS.primary};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${COLORS.light};
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    background: ${COLORS.primaryDark};
  }
`;

export const AddTaskFormWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background: ${COLORS.primaryDarker};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  font-familt: Inter;
  width: 100%;
  padding: 10px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  background: ${COLORS.secondary};
  color: ${COLORS.light};
  font-family: Inter;

  &:focus {
    outline: none;
  }
`;

export const DescriptionArea = styled.textarea`
  width: 100%;
  padding: 10px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  background: #4a4a4a;
  color: ${COLORS.light};
  resize: vertical;
  font-family: Inter;

  &:focus {
    outline: none;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  font-familt: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
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

  &:hover:disabled {
    background: ${COLORS.successDisabled};
    cursor: not-allowed;
  }

  &:hover {
    background: ${COLORS.success};
  }
`;

export const CancelButton = styled.button`
  font-familt: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
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

  &:hover {
    background: ${COLORS.error};
  }
`;
