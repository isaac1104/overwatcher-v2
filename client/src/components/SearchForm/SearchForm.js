import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  formSubmit = ({ battletag }) => {
    const { history, reset } = this.props;
    history.push(`/player/stats/${battletag}`);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    const style = {
      form: {
        display: 'flex',
        marginTop: '12px'
      },
      button: {
        marginLeft: '10px'
      }
    }
    return (
      <form onSubmit={handleSubmit(this.formSubmit)} style={style.form}>
        <Field
          name='battletag'
          component={FormField}
        />
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.battletag) {
    errors.battletag = 'Battletag is required!'
  }
  return errors;
}

export default withRouter(
  reduxForm({
  validate,
  form: 'battletag'
})(Form));
