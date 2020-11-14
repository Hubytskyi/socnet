import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.profile}>
      <img className={s.profileAva}
        src="https://images.unsplash.com/photo-1604018612946-b40898a4236e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt=""/>
      <h2>Joseph Ashraf</h2>
    </div>
  )
};

export default Profile;