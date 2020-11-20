import React from 'react'
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostValueActionCreator} from "../../../../redux/reducers/content";

const NewPost = (props) => {

  const newPostElement = React.createRef();
  const newPostValue = props.state.contentPage.newPostValue;

  const addPostElement = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action  = updateNewPostValueActionCreator(text);
    props.dispatch(action);
  };

  return (
    <form className={s.addPostForm}>
      <textarea
        className={s.addPostTextarea}
        name="post" ref={newPostElement}
        onChange={onPostChange}
        value={newPostValue}
        placeholder="Type something..."/>
      <input type="button" className={s.addPost} onClick={addPostElement} value="Add new post"/>
    </form>
  )
};

export default NewPost;