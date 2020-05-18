import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

import { changeField } from 'src/actions/contact';

// == Data / state
const mapStateToProps = (state) => ({
  firstname: state.firstname,
  email: state.email,
  message: state.message,
  status: state.status,
});


// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
