import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 500px;
  min-height: 150px;
  background-color: ${COLORS.primary};
  color: ${COLORS.light};
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TaskHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TaskTitle = styled.h3`
  color: ${COLORS.light};
  margin: 2px;
`;

export const TaskID = styled.p`
  color: ${COLORS.light};
  margin: 2px;
  font-size: 12px;
  opacity: 0.4;
`;

export const TaskDescription = styled.p``;

export const CardButton = styled.button`
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
  margin: 2px;
  &:hover {
    background: ${COLORS.successDisabled};
  }
`;

export const CloseButton = styled(CardButton)`
  &:hover {
    background: ${COLORS.error};
  }
`;

export const Copied = styled.span`
  background: #4aa3df;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  margin: 10px auto;
`;
