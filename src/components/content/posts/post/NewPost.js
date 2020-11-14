import React from 'react'
import s from './NewPost.module.css'

const NewPost = () => {
  return (
    <form className={s.addPostForm}>
      <textarea className={s.addPostTextarea} name="post" />
      <button className={s.addPost}>Add new post</button>
    </form>
  )
};

export default NewPost;