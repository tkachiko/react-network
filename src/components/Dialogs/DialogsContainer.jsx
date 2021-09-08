import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    mewMessage: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendNewMessage: text => {
      dispatch(sendMessage(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
)(Dialogs);
