import { authAPI, securityAPI } from '../API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const STOP_SUBMIT = 'auth/STOP_SUBMIT';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
  captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case STOP_SUBMIT:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

// action creators
export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});
export const stopSubmit = error => ({ type: STOP_SUBMIT, error });
export const getCaptchaUrlSucces = captchaUrl => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

// thunk creators
export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email, password, rememberMe, captcha, setStatus) => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      // success, get auth data
      dispatch(getAuthUserData());
      console.log('Logged in successfully!');
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let error =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit(error));
      setStatus(response.data.messages);
      console.log('An error has occured');
    }
  };

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(initialState));
  }
};

export default authReducer;
