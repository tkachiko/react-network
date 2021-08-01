import StoreContext from '../../StoreContext';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState();

        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onMessageChange = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            mewMessage={state.dialogsPage.newMessageText}
            sendNewMessage={sendMessage}
            updateNewMessageText={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
