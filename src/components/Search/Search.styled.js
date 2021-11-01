import styled from 'styled-components';

export const SearchWrapper = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.font};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  background: none;
  font-family: Space Mono;
  flex-grow: 2;
  height: 25;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
  padding: 0 7px;
  caret-color: ${(props) => props.theme.carret};

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: ${(props) => props.theme.button};
  border-radius: 10px;
  color: #fff;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  height: 100%;
  width: 84px;
  cursor: pointer;
`;
