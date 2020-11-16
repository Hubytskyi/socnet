import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.postInner}>
        <div className={s.postHeader}>
          <div className={s.postAvatar}>
            <img
              src="https://images.unsplash.com/photo-1604018612946-b40898a4236e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""/>
          </div>
          <div className={s.postAuthor}>{props.author}</div>
        </div>
        <div className={s.postContent}>
          <p>{props.text}</p>
        </div>
        <div className={s.postFooter}>
          <time>{props.date}</time>
          <div className={s.postLike}>{props.likes} <button> like</button></div>
        </div>
      </div>
    </div>
  )
};

export default Post;