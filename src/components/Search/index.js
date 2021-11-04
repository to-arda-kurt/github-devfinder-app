import { useContext, useState } from 'react';
import mainContext from '../../context/mainContext';
import {
  SearchWrapper,
  SearchInput,
  SearchButton,
  ErrorText,
} from './Search.styled';
import { SearchIcon } from '../../assets/Icons';

const SearchBar = () => {
  const MainContext = useContext(mainContext);
  const { getUser, error } = MainContext;

  const [user, setUser] = useState('');

  const searchUser = (e) => {
    e.preventDefault();
    if (user !== '') {
      getUser(user);
    } else {
      alert('need to type something');
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput
        placeholder="Search GitHub username…"
        type="text"
        autoFocus
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {error ? <ErrorText>No Result</ErrorText> : ''}
      <SearchButton type="submit" onClick={searchUser}>
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
