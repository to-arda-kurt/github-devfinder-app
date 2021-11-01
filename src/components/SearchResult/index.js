import React, { useContext, useEffect } from 'react';
import { ResultWrapper } from './SearchResult.styled';
import MainContext from '../../context/mainContext';
const SearchResult = () => {
  const mainContext = useContext(MainContext);
  const { user } = mainContext;
  console.log(user);

  return (
    <ResultWrapper>
      <div>
        <div>PP</div>
        <div className="RIGHT">
          <h2>{user.name}</h2>
          <p>@{user.login}</p>
        </div>
        <div className="Date">
          <p>Joined </p>
        </div>
        <div>DESC</div>
        <div className="INFOS">
          <div>
            <p>REPOS</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>2222</p>
          </div>
          <div>
            <p>Following</p>
            <p>9</p>
          </div>
        </div>
        <div className="LISTS">
          <div>
            <div className="icon"></div>
            <div className="info"></div>
          </div>
          <div>
            <div className="icon"></div>
            <div className="info"></div>
          </div>
          <div>
            <div className="icon"></div>
            <div className="info"></div>
          </div>
          <div>
            <div className="icon"></div>
            <div className="info"></div>
          </div>
        </div>
      </div>
    </ResultWrapper>
  );
};

export default SearchResult;
