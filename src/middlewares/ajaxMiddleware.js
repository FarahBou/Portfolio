import axios from 'axios';

import {
  CONTACT,
  setError,
  setSent,
} from 'src/actions/contact';


// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  const handleError = (error) => {
    store.dispatch(setError(error.response));
    //console.log(error.response)
  };
  const saveStatus = (response) => {
    store.dispatch(setSent(response.data.status));
  };
  switch (action.type) {
    case CONTACT: {
      const state = store.getState();
      //console.log("firstname", state.firstname);

      axios({
        method: 'post',
        url: '',
        data: {
          firstname: state.firstname,
          email: state.email,
          message: state.message,
        },
      })
        .then(saveStatus)
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
