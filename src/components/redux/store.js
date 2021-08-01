import dialogsResucer from './dialogs-reducer';
import profileResucer from './profile-reducer';
import sidebarResucer from './sidebar-reducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you?', likesCount: 7 },
        { id: 2, message: `It's my first post!`, likesCount: 15 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Emmett' },
        { id: 2, name: 'Marty' },
        { id: 3, name: 'Lorraine' },
        { id: 4, name: 'George' },
        { id: 5, name: 'Jennifer' },
        { id: 6, name: 'Einstein' },
      ],
      messages: [
        { id: 1, message: 'Great Scott!' },
        { id: 2, message: 'Nobody calls me chicken!' },
        { id: 3, message: 'No way!' },
        { id: 4, message: "How's it going?" },
        { id: 5, message: 'Maybe later' },
        { id: 6, message: 'Woof!' },
      ],
      newMessageText: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State has been changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileResucer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsResucer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarResucer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
