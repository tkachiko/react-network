import { authAPI } from '../API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const STOP_SUBMIT = 'STOP_SUBMIT';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
      case STOP_SUBMIT:
        return {...state, error: action.error };
    default:
      return state;
  }
};

// action creators
export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const stopSubmit = (error) => ({ type: STOP_SUBMIT, error });

// thunk creators
export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email, password, rememberMe, setStatus) => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setStatus(response.data.messages);
    }
  };

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(initialState));
  }
};

export default authReducer;
