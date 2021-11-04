import { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { GET_USER, SWITCH_THEME, SET_LOADING, SET_ERROR } from './types';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    searchText: '',
    isLoaded: false,
    theme: 'dark',
    user: {
      login: 'octocat',
      id: 583231,
      node_id: 'MDQ6VXNlcjU4MzIzMQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false,
      name: 'The Octocat',
      company: '@github',
      blog: 'https://github.blog',
      location: 'San Francisco',
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 8,
      public_gists: 8,
      followers: 4116,
      following: 9,
      created_at: '2011-01-25T18:44:36Z',
      updated_at: '2021-10-22T14:27:39Z',
    },
    error: false,
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getUser = async (searchText) => {
    console.log('[context] GETUSER');
    await axios
      .get(`https://api.github.com/users/${searchText}`)
      .then((res) => {
        console.log(res.data);
        setLoading(true);
        setError(false);
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
        console.log('no user');
      });
  };

  const setTheme = (theme) => {
    dispatch({
      type: SWITCH_THEME,
      payload: theme,
    });
  };

  const setLoading = (loading) => {
    dispatch({
      type: SET_LOADING,
      payload: loading,
    });
  };

  const setError = (errorStatus) => {
    dispatch({
      type: SET_ERROR,
      payload: errorStatus,
    });
  };
  return (
    <MainContext.Provider
      value={{
        searchText: state.searchText,
        user: state.user,
        theme: state.theme,
        isLoaded: state.isLoaded,
        error: state.error,
        getUser,
        setTheme,
        setLoading,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
