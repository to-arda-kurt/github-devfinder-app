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
  ResultFooter,
  ResultFooterItem,
  ResultFooterActiveText,
} from './SearchResult.styled';
import {
  CompanyIcon,
  TwitterIcon,
  WebsiteIcon,
  LocationIcon,
} from '../../assets/Icons';
import MainContext from '../../context/mainContext';
import { shortMonthName } from '../../utils';
const SearchResult = () => {
  const mainContext = useContext(MainContext);
  const { user, isLoaded } = mainContext;

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
            <ResultFooter>
              <ResultFooterItem status={user.location ? 'active' : 'passive'}>
                <LocationIcon />
                <p>{user.location ? user.location : 'Not Available'}</p>
              </ResultFooterItem>
              <ResultFooterItem status={user.blog ? 'active' : 'passive'}>
                <WebsiteIcon />
                <p>{user.blog ? user.blog : 'Not Available'}</p>
              </ResultFooterItem>
              <ResultFooterItem
                status={user.twitter_username ? 'active' : 'passive'}
              >
                <TwitterIcon />
                <p>
                  {user.twitter_username
                    ? user.twitter_username
                    : 'Not Available'}
                </p>
              </ResultFooterItem>
              <ResultFooterItem status={user.company ? 'active' : 'passive'}>
                <CompanyIcon />
                <p>{user.company ? user.company : 'Not Available'}</p>
              </ResultFooterItem>
            </ResultFooter>
          </div>
        </ResultWrapper>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default SearchResult;
