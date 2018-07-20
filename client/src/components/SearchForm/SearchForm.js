import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  formSubmit = ({ battletag }) => {
    const { history } = this.props;
    history.push(`/player/stats/${battletag}`);
  }

  render() {
    const { handleSubmit } = this.props;
    const style = {
      form: {
        float: 'right',
        marginRight: '12px'
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
