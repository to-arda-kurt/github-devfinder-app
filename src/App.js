import { useState, useEffect } from 'react';
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
} from './styled/Global.Styled.js';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

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
