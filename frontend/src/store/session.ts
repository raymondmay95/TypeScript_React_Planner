import { AppDispatch } from "..";
import { csrfFetch } from "./csrf";
import { removeEvents } from "./events";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

export interface userType {
  credential?: string,
  password?: string,
  username?: string,
  email?: string,
  errors?: string[]
}

const setUser = (user: userType) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
// ----- Login Utility -------
export const login = (user: userType) => async (dispatch: AppDispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
// grabs session cookie to dispatch user
export const restoreUser = () => async (dispatch: AppDispatch) => {
  const response = await csrfFetch("/api/session/");
  const {user} = await response.json();
  dispatch(setUser(user));
  return user;
};
// ----- SignUp Utility -------
export const signup = (user: userType) => async (dispatch: AppDispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
export const logout = () => async (dispatch: AppDispatch | any) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  dispatch(removeEvents())
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action: {type: string, payload: any}) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
