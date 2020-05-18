import { CHANGE_FIELD } from 'src/actions/contact';

// Action Types

// Initial State
// state.auth....
const initialState = {
  firstname: '',
  email: '',
  message: '',
  status: 0,
};

// Reducer
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default contactReducer;
