import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares

// Reducer
import contactReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    // ... autres middlewares
  ),
);

const store = createStore(
  contactReducer,
  enhancers,
);

export default store;
