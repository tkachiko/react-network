import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
  followSuccess,
  getUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollowSuccess,
  follow,
  unfollow,
} from '../redux/users-reducer';
import Users from './Users';
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollowSuccess={this.props.unfollowSuccess}
            followSuccess={this.props.followSuccess}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
  follow,
  unfollow,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
