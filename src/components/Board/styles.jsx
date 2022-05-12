import styled from 'styled-components';

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  width: 100%;
  height: calc(100vh - 56px);
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  height: calc(100vh - 56px);
`;
