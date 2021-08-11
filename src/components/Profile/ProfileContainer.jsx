import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent,
);
