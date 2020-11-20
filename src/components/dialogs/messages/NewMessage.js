import React from 'react'
import s from './NewMessage.module.css'
import {sendMessageActionCreator, updateNewMessageValueCreator} from "../../../redux/reducers/dialogs";

const NewMessage = (props) => {

  const newMessageElement = React.createRef();
  const newMessageValue = props.state.dialogsPage.newMessageValue;

  const addMessageElement = () => {
    props.dispatch(sendMessageActionCreator())
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    const action = updateNewMessageValueCreator(text);
    props.dispatch(action)
  };

  return (
    <form className={s.newMessage}>
      <textarea
        name="new-message"
        ref={newMessageElement}
        placeholder="Type something..."
        value={newMessageValue}
        onChange={onMessageChange}/>
      <input type="button" className={s.addMessage} onClick={addMessageElement} value="Send message"/>

    </form>
  )
};

export default NewMessage;