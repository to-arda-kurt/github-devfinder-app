import React, { useContext, useEffect } from 'react';
import {
  ResultWrapper,
  ResultImg,
  ResultHeader,
  ResultHeaderName,
  ResultHeaderUser,
  ResultHeaderDate,
  ResultBio,
  ResultInfo,
  ResultInfoHeader,
  ResultInfoItem,
} from './SearchResult.styled';
import MainContext from '../../context/mainContext';
import { shortMonthName } from '../../utils';
const SearchResult = () => {
  const mainContext = useContext(MainContext);
  const { user, isLoaded } = mainContext;
  useEffect(() => {
    if (user.name) {
      document.title = `User ${user.name}`;
    } else {
      document.title = 'No user';
    }
  }, [user]);
  const joinDate = new Date(user.created_at);

  const [year, month, day] = [
    joinDate.getFullYear(),
    shortMonthName(joinDate.getMonth()),
    joinDate.getDate(),
  ];

  return (
    <>
      {isLoaded ? (
        <ResultWrapper>
          <div>
            <ResultHeader>
              <ResultImg src={user.avatar_url} alt="" />
              <div>
                <ResultHeaderName>
                  {user.name ? user.name : user.login}
                </ResultHeaderName>
                <ResultHeaderUser>@{user.login}</ResultHeaderUser>
                <ResultHeaderDate>
                  Joined {day} {month} {year}
                </ResultHeaderDate>
              </div>
            </ResultHeader>
            <ResultBio>
              {user.bio
                ? user.bio
                : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
            </ResultBio>
            <ResultInfo>
              <ResultInfoItem>
                <ResultInfoHeader>Repos</ResultInfoHeader>
                <p>{user.public_repos}</p>
              </ResultInfoItem>
              <ResultInfoItem>
                <ResultInfoHeader>Followers</ResultInfoHeader>
                <p>{user.followers}</p>
              </ResultInfoItem>
              <ResultInfoItem>
                <ResultInfoHeader>Following</ResultInfoHeader>
                <p>{user.following}</p>
              </ResultInfoItem>
            </ResultInfo>
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
      ) : (
        <p></p>
      )}
    </>
  );
};

export default SearchResult;
