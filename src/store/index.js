import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';

// Reducer
import contactReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    ajaxMiddleware,
    // ... autres middlewares
  ),
);

const store = createStore(
  contactReducer,
  enhancers,
);

export default store;
