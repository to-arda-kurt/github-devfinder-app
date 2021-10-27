import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 31px 0 36px 0;
  justify-content: left;
  align-items: center;
`;

export const Logo = styled.p`
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  color: ${(props) => props.theme.font};
`;

export const Toggle = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color: ${(props) => props.theme.toggle};
  transition: 0.2s;
  text-transform: uppercase;
  cursor: pointer;
`;
