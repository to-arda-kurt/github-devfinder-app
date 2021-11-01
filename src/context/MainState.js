import { useReducer } from 'react';
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { GET_USER, SWITCH_THEME, SET_LOADING } from './types';
import axios from 'axios';

const MainState = (props) => {
  const initialState = {
    searchText: '',
    isLoaded: false,
    theme: 'light',
    user: {},
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getUser = async (searchText) => {
    console.log('[context] GETUSER');
    const res = await axios.get(`https://api.github.com/users/${searchText}`);
    console.log(res.data);
    dispatch({
      type: GET_USER,
      payload: res.data,
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
  return (
    <MainContext.Provider
      value={{
        searchText: state.searchText,
        user: state.user,
        theme: state.theme,
        isLoading: state.isLoading,
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
