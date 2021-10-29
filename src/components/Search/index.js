import { useState } from 'react';
import { SearchWrapper, SearchInput, SearchButton } from './Search.styled';
import { SearchIcon } from '../../assets/Icons';

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput placeholder="Search GitHub username…" autoFocus />
      <SearchButton type="submit">Search</SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
