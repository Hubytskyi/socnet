import React from 'react'
import s from './Post.module.css'


const Post = (post) => {
  return (
    <div className={s.post}>
      <div className={s.postInner}>
        <div className={s.postHeader}>
          <div className={s.postAvatar}>
            <img
              src="https://images.unsplash.com/photo-1604018612946-b40898a4236e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""/>
          </div>
          <div className={s.postAuthor}>{post.post.author}</div>
        </div>
        <div className={s.postContent}>
          <p>{post.post.text}</p>
        </div>
        <div className={s.postFooter}>
          <time>{post.post.date}</time>
          <div className={s.postLike}>{post.post.like} <button> like</button></div>
        </div>
      </div>
    </div>
  )
};

export default Post;