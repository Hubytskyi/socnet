import {NavLink} from "react-router-dom";
import s from "./DialogUser.module.css";

const DialogUser = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <NavLink key={props.id} className={s.dialogsUserItem} to={path}>
      <img className={s.dialogsUserAvatar}
           src="https://images.unsplash.com/photo-1604018612946-b40898a4236e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
           alt=""/>
      <span>{props.name}</span>
    </NavLink>
  )
};

export default DialogUser;