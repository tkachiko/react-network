import styles from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Marty McFly',
        status: 'Nobody calls me chicken!',
        location: { city: 'Hill Valley', country: 'USA' },
        photoUrl:
          'https://pbs.twimg.com/profile_images/115422070/mcfly_400x400.JPG',
      },
      {
        id: 2,
        followed: false,
        fullName: 'Emmett Brown',
        status: 'Great Scott!',
        location: { city: 'Hill Valley', country: 'USA' },
        photoUrl: 'https://miro.medium.com/max/1112/0*OoUgcnkoRMF_Oww7.jpg',
      },
      {
        id: 3,
        followed: false,
        fullName: 'Lorraine McFly',
        status: "He's an absolute dream!",
        location: { city: 'Hill Valley', country: 'USA' },
        photoUrl:
          'https://images.squarespace-cdn.com/content/v1/5c62c09c4d546e27dc1016c7/1556722310765-MQ4RPZQXS0S8A4V4KQLQ/ke17ZwdGBToddI8pDm48kP06O0_IHyRXSOOiqwgWaApZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEHLRkg2cosQUGLeQ33UzXdgIxPDaVwE3LlEpL74qP4JVW4jCyXLPvvdR287iymYt8/lea-thompson_300x300.jpg',
      },
    ]);
  }
  
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <div>
            <div>
              <img
                src={user.photoUrl}
                alt='user avatar'
                className={styles.userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
