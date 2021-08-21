import { Form, Formik } from 'formik';
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost }) => {
  const postsElements = posts
    .map(post => (
      <Post
        message={post.message}
        likesCount={post.likesCount}
        key={post.id}
        id={post.id}
      />
    ))
    .reverse();

  return (
    <div className={styles.posts}>
      <div>
        <Formik
          initialValues={{ post: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            addPost(values.post);
            resetForm({ values: '' });
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form>
              <div>
                <textarea
                  name='post'
                  onChange={handleChange}
                  value={values.post}
                  placeholder="What's on your mind?"
                  className={styles.textarea}
                />
              </div>
              <div className={styles.buttonWrapper}>
                <input onSubmit={handleSubmit} type='submit' value='Send' />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
