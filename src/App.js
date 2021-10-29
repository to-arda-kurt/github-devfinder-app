import { useState, useEffect } from 'react';
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
} from './styled/Global.Styled.js';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import SearchBar from './components/Search';
import SearchResult from './components/SearchResult';
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
        <SearchBar />
        <SearchResult />
      </Container>
    </ThemeProvider>
  );
}

export default App;
