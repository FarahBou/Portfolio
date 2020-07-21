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
    //console.log(response.data.status)
  };
  switch (action.type) {
    case CONTACT: {
      const state = store.getState();
      console.log('name :', state.name);
      console.log('message :', state.message);

      axios({
        method: 'post',
        url: 'http://18.210.15.139:5000/send',
        data: {
          name: state.name,
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
