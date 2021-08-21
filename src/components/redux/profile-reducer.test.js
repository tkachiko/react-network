import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

const initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 7 },
    { id: 2, message: `It's my first post!`, likesCount: 15 },
  ],
};

it('Posts length should be incremented', () => {
  // 1. start data
  let action = addPostActionCreator('it-kamasutra.com');

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('New post text should be correct', () => {
  // 1. start data
  let action = addPostActionCreator('it-kamasutra.com');

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

it('After deleting length of messages should be decremented', () => {
  // 1. start data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it(`After deleting length of messages shouldn't be decremented if id is incorrect`, () => {
  // 1. start data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});
