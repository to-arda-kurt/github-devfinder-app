import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  button: '#0079FF',
  buttonHover: '#60ABFF',
  carret: '#0079FF',
  body2: '#697C9A',
  toggle: '#4B6A9B',
  toggleHover: '#222731;',
  font: '#2B3442',
  body: '#F6F8FF',
  secondary: '#FEFEFE',
  boxShadow: '  0px 16px 30px -10px rgba(70, 96, 187, 0.2)',
};

export const darkTheme = {
  button: '#0079FF',
  carret: '#0079FF',
  buttonHover: '#60ABFF',
  font: '#ffffff',
  toggle: '#ffffff',
  toggleHover: '#90A4D4;',
  body2: '#ffffff',
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

  @media screen and (min-width: 768px) {
    width: 730px;
    margin: 0 auto;
    margin-top: 144px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    width: 573px;
    margin: 0 auto;
    margin-top: 140px;
  } ;
`;
