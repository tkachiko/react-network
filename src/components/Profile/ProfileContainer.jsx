import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../API/API';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  aboutMe: state.profilePage.aboutMe,
  fullName: state.profilePage.fullName,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent,
);
