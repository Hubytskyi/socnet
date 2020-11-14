import React from 'react'
import s from './Posts.module.css'
import NewPost from "./post/NewPost";
import Post from "./post/Post";

const Posts = (props) => {
  return (
    <div className={s.posts}>
      <h3>Posts</h3>
      <NewPost/>
      {props.posts.posts.map(post => {
        return <Post post={post} key={post.id}/>
      })}
    </div>
  )
};

export default Posts;