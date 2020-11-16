import React from 'react'
import s from './Dialogs.module.css'
import DialogUser from './dialogUser/DialogUser'
import Message from './messages/Message'

const Dialogs = (props) => {

  const dialogsElements = props.dialogs.map(d => <DialogUser key={d.id} id={d.id} name={d.name}/>);
  const messagesItems = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message} date={m.date}/>);

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsUsers}>

        {dialogsElements}

      </div>
      <div className={s.dialogsMessages}>

        {messagesItems}

      </div>
    </section>
  )
};

export default Dialogs;