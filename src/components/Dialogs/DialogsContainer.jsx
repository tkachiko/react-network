import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { withRouter } from 'react-router-dom';
import { sendMessage, setActiveDialog } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { useEffect, useState } from 'react';

const DialogContainer = ({
  dialogs,
  authors,
  messages,
  activeDialogId,
  isAuth,
  sendMessage,
  setActiveDialog,
  ...props
}) => {
  const [currentDialogId, setCurrentDialogId] = useState(null);

  useEffect(() => {
    setActiveDialog(currentDialogId);
  }, [currentDialogId]);

  useEffect(() => {
    setCurrentDialogId(
      Number.parseInt(props.match.params.dialogId) || activeDialogId,
    );
  }, [Number.parseInt(props.match.params.dialogId)]);

  const findCompanion = authorId =>
    authors.find(author => author.id === authorId);

  const companionName =
    activeDialogId &&
    dialogs
      .find(({ id }) => id === activeDialogId)
      .companions.map(companionId => findCompanion(companionId))
      .map(companion => companion.name)[0];

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages.filter(message => message.dialogId === activeDialogId)}
      activeDialogId={activeDialogId}
      companionName={companionName}
      findCompanion={findCompanion}
      sendMessage={sendMessage}
      isAuth={isAuth}
    />
  );
};

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    authors: state.dialogsPage.authors,
    messages: state.dialogsPage.messages,
    activeDialogId: state.dialogsPage.activeDialogId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage, setActiveDialog }),
  withRouter,
  WithAuthRedirect,
)(DialogContainer);
