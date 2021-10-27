import { useState } from 'react';
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
} from './styled/Global.Styled.js';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header toggle={theme} themeToggler={themeToggler} />
        <h2>SearchBar</h2>
        <h3>Results</h3>
      </Container>
    </ThemeProvider>
  );
}

export default App;
