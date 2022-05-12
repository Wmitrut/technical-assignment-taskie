import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  background: ${COLORS.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s all;

  &:hover {
    background: ${COLORS.secondaryLight};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardIndex = styled.p`
  font-weight: 400;
  margin: 2px;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  opacity: 0.4;
  color: ${COLORS.light};
`;

export const Title = styled.h4`
  color: ${COLORS.light};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  margin: 3px;
  flex: 1;
`;

export const Description = styled.p`
  color: ${COLORS.light};
  opacity: 0.6;
  font-size: 12px;
  margin: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  margin: 2px;
  border: 1px solid;
  border-color: ${COLORS.primaryDark};
  background-color: ${COLORS.secondaryLight};
  transition: 0.3s all;
  cursor: pointer;
  color: ${COLORS.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${COLORS.successDisabled};
  }
`;

export const DeleteButton = styled(CardButton)`
  &:hover {
    background: ${COLORS.error};
  }
`;
