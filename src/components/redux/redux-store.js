import { combineReducers, createStore } from 'redux';
import profileResucer from './profile-reducer';
import dialogsResucer from './dialogs-reducer';
import sidebarResucer from './sidebar-reducer';

const reducers = combineReducers({
  profilePage: profileResucer,
  dialogsPage: dialogsResucer,
  sidebar: sidebarResucer,
});

const store = createStore(reducers);

export default store;
