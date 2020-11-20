const UPDATE_NEW_MESSAGE_VALUE = 'UPDATE-NEW-MESSAGE-VALUE',
  SEND_MESSAGE = 'SEND-MESSAGE';

const date = new Date(),
  day = date.getDate(),
  month = date.getMonth(),
  year = date.getFullYear(),
  fullDate = `${day}/${month}/${year}`;

const dialogsReducer = (state, action) => {

  switch(action.type) {

    case SEND_MESSAGE:
      const newMessage = {
        id: '10',
        message: state.newMessageValue,
        date: fullDate,
      };
      state.messages.push(newMessage);
      state.newMessageValue = '';
      return state;
    case UPDATE_NEW_MESSAGE_VALUE:
      state.newMessageValue = action.newMessageValue;
      return state;

    default:
      return state
  }

};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageValueCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_VALUE, newMessageValue: text});

export default dialogsReducer;