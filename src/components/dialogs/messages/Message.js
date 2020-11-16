import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.dialogsMessageItem}>
      <img className={s.dialogsMessageAvatar}
           src="https://images.unsplash.com/photo-1604018612946-b40898a4236e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
           alt=""/>
      <p>{props.message}</p>
      <time>{props.date}</time>
    </div>
  )
};

export default Message;