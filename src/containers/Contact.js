import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { changeField, ContactInfo } from 'src/actions/contact';

// == Data / state
const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  message: state.message,
  error: state.error,
  status: state.status,
});


// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleContact: () => {
    dispatch(ContactInfo());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
