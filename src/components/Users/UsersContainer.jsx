import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import {
  requestUsers,
  setCurrentPage,
  toggleIsFollowingProgress,
  follow,
  unfollow,
} from '../../redux/users-reducer';
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import Users from './Users';
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

const mapDispatchToProps = {
  setCurrentPage,
  toggleIsFollowingProgress,
  requestUsers,
  follow,
  unfollow,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer,
);
