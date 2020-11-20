import dialogsReducer from "./reducers/dialogs";
import contentReducer from "./reducers/content";

const store = {

  _state: {
    contentPage: {
      posts: [
        {id: '1', date: '12/11/2020', text: 'some text 1', author: 'Valera', likes: '11'},
        {id: '2', date: '13/11/2020', text: 'some text 2', author: 'Valera', likes: '12'},
        {id: '3', date: '15/11/2020', text: 'some text 3', author: 'Valera', likes: '13'},
        {id: '4', date: '14/11/2020', text: 'some text 4', author: 'Valera', likes: '14'},
        {id: '5', date: '11/11/2020', text: 'some text 5', author: 'Valera', likes: '15'},
      ],

      newPostValue: '',
    },

    dialogsPage: {
      dialogs: [
        {id: '1', name: 'Mykola Hubytskyi1'},
        {id: '2', name: 'Mykola Hubytskyi2'},
        {id: '3', name: 'Mykola Hubytskyi3'},
        {id: '4', name: 'Mykola Hubytskyi4'},
        {id: '5', name: 'Mykola Hubytskyi5'},
      ],
      messages: [
        {
          id: '1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 1.',
          date: '11/11/2020'
        },
        {
          id: '2',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 2.',
          date: '11/11/2020'
        },
        {
          id: '3',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 3.',
          date: '11/11/2020'
        },
        {
          id: '4',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 4.',
          date: '11/11/2020'
        },
        {
          id: '5',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 5.',
          date: '11/11/2020'
        },
      ],
      newMessageValue: '',
    },
  },

  _callSubscriber() {
    console.log('State changed.')
  },

  getState() {
    return this._state
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.contentPage = contentReducer(this._state.contentPage, action);

    this._callSubscriber(this._state);

  }

};

export default store;

