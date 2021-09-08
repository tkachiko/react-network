import { UserType } from './../types/types';
import { usersAPI } from '../API/API';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users ids
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID),
      };
    default:
      return state;
  }
};

// action creators
type FollowSuccess = {
  type: typeof FOLLOW
  userID: number
}
export const followSuccess = (userID: number): FollowSuccess => ({ type: FOLLOW, userID });
type UnfollowSuccess = {
  type: typeof UNFOLLOW
  userID: number
}
export const unfollowSuccess = (userID: number): UnfollowSuccess => ({ type: UNFOLLOW, userID });
type SetUsers = {
  type: typeof SET_USERS
  users: UserType
}
export const setUsers = (users: UserType): SetUsers => ({ type: SET_USERS, users });
type SetCurrentPage = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
type SetTotalUsersCount = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
type toggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
type ToggleIsFollowingProgress = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userID: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number): ToggleIsFollowingProgress => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userID,
});

// thunk creators
export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const response = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};

const toggleFollowing = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
  toggleFollowing(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  toggleFollowing(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;
