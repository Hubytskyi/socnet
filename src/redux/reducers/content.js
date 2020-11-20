const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

const date = new Date(),
  day = date.getDate(),
  month = date.getMonth(),
  year = date.getFullYear(),
  fullDate = `${day}/${month}/${year}`;

const contentReducer = (state, action) => {

  switch (action.type) {

    case ADD_POST:
      const newPost = {
        id: '13',
        date: fullDate,
        text: state.newPostValue,
        author: 'Lev',
        likes: '0'
      };
      state.posts.push(newPost);
      state.newPostValue = '';
      return state;

    case UPDATE_NEW_POST_VALUE:
      state.newPostValue = action.newPostValue;
      return state;

    default:
      return state
  }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostValueActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_VALUE, newPostValue: text});

export default contentReducer;