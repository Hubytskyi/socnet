import React from 'react'
import s from './Dialogs.module.css'
import DialogUser from './dialogUser/DialogUser'
import Message from './messages/Message'
import NewMessage from "./messages/NewMessage";

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogUser key={d.id} id={d.id} name={d.name}/>);
  const messagesItems = props.state.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} date={m.date}/>);

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsUsers}>
        {dialogsElements}
      </div>
      <div className={s.dialogsMessages}>
        <div className="dialogsMessagesItems">
          {messagesItems}
        </div>
        <NewMessage state={props.state} dispatch={props.dispatch}/>
      </div>
    </section>
  )
};

export default Dialogs;