import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  button: '#0079FF',
  carret: '#0079FF',
  lightGray: '#697C9A',
  toggle: '#4B6A9B',
  font: '#2B3442',
  body: '#F6F8FF',
  secondary: '#FEFEFE',
  boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.2)',
};

export const darkTheme = {
  button: '#0079FF',
  carret: '#0079FF',
  font: '#ffffff',
  toggle: '#ffffff',
  body: '#141D2F',
  secondary: '#1E2A47',
};

export const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      font-family: 'Space Mono', monospace;
    }
    
    body{
      background-color: ${(props) => props.theme.body};
    }

  `;

export const Container = styled.div`
  margin: 0 24px;
`;
