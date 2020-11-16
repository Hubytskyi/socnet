import React from 'react'
import NewPost from "./post/NewPost";
import Post from "./post/Post";

const Posts = (props) => {

  const postElements = props.posts.map(p => <Post id={p.id} key={p.id} text={p.text} likes={p.likes}/>);

  return (
    <div>
      <h3>Posts</h3>
      <NewPost/>
      {postElements}
    </div>
  )
};

export default Posts;