import React from 'react'
import s from './Content.module.css'
import Profile from "./profile/Profile";
import Posts from "./posts/Posts";

const Content = (props) => {

  return (
    <section className={s.mainContent}>
      <Profile/>
      <Posts
        state={props.state}
        dispatch={props.dispatch}
        />
    </section>
  )
};

export default Content;