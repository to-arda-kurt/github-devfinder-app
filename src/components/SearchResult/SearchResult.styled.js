import styled from 'styled-components';

export const ResultWrapper = styled.div`
  height: 517px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.font};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 32px 24px;
  z-index: 1;
`;
