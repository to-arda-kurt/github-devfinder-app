import { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { GET_USER, SWITCH_THEME, SET_LOADING, SET_ERROR } from './types';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    searchText: '',
    isLoaded: false,
    theme: 'light',
    user: {},
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
