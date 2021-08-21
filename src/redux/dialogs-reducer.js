const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.text }],
      };
    default:
      return state;
  }
};

// action creators
export const sendMessageActionCreator = text => ({ type: SEND_MESSAGE, text });

export default dialogsReducer;
