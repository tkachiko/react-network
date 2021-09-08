import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean;
};
const initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// action creators
type inisializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};
export const inisializedSuccess = (): inisializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

// thunk creators
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(inisializedSuccess());
  });
};

export default appReducer;
