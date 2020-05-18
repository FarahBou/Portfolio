// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CONTACT = 'CONTACT';

// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const Contact = () => ({
  type: CONTACT,
});
