import React from 'react'
import NewPost from "./post/NewPost";
import Post from "./post/Post";

const Posts = (props) => {

  const postElements = props.state.contentPage.posts.map(p => <Post id={p.id} key={p.id} text={p.text} likes={p.likes} author={p.author}/>);

  return (
    <div>
      <h3>Posts</h3>
      <NewPost
        dispatch={props.dispatch}
        state={props.state}
        />
      {postElements}
    </div>
  )
};

export default Posts;