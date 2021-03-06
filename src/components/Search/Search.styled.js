import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
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
  z-index: 0;
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    height: 69px;
    padding-left: 32px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    height: 69px;
    padding-left: 32px;
  } ;
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
  color: ${(props) => props.theme.font};
  line-height: 25px;
  padding: 0 7px;
  caret-color: ${(props) => props.theme.carret};

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    padding-left: 24px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 18px;
    line-height: 25px;
    padding-left: 24px;
  } ;
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

  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }

  @media screen and (min-width: 768px) {
    width: 106px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    width: 106px;
  } ;
`;

export const ErrorText = styled.p`
  position: absolute;
  height: 22px;
  width: 80px;
  top: 40%;
  left: 50%;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: #f74646;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    padding-left: 24px;
    height: 22px;
    left: 68.22%;
    right: 19.18%;
    top: calc(50% - 22px / 2 + 0.5px);
    width: 120px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 15px;
    line-height: 22px;
    padding-left: 24px;
    height: 22px;
    left: 60%;
    right: 19.18%;
    top: calc(50% - 22px / 2 + 0.5px);
    width: 120px;
  } ;
`;
