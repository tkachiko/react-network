import React from 'react';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  saveProfile
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
    this.refreshProfile()
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} updatePhoto={this.props.updatePhoto} saveProfile={this.props.saveProfile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updatePhoto, saveProfile }),
  withRouter,
  WithAuthRedirect,
)(ProfileContainer);
