import { CHANGE_FIELD, SET_ERROR, SET_SENT } from 'src/actions/contact';

// Action Types

// Initial State
// state.auth....
const initialState = {
  name: '',
  email: '',
  message: '',
  error: '',
  status: '',
};

// Reducer
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_SENT:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default contactReducer;
