const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'Emmett' },
    { id: 2, name: 'Marty' },
    { id: 3, name: 'Lorraine' },
    { id: 4, name: 'George' },
    { id: 5, name: 'Jennifer' },
    { id: 6, name: 'Einstein' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Great Scott!' },
    { id: 2, message: 'Nobody calls me chicken!' },
    { id: 3, message: 'No way!' },
    { id: 4, message: "How's it going?" },
    { id: 5, message: 'Maybe later' },
    { id: 6, message: 'Woof!' },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: action.text },
        ],
      };
    default:
      return state;
  }
};

// action creators
type sendMessageActionType = {
  type: typeof SEND_MESSAGE;
  text: string;
};
export const sendMessage = (text: string): sendMessageActionType => ({
  type: SEND_MESSAGE,
  text,
});

export default dialogsReducer;
