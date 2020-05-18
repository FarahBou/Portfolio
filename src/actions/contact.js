// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CONTACT = 'CONTACT';
export const SET_ERROR = 'SET_ERROR';
export const SET_SENT = 'SET_SENT';

// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const Contact = () => ({
  type: CONTACT,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const setSent = (status) => ({
  type: SET_SENT,
  status,
});
