import React, { Component } from 'react';
import { Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-antd';
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
          component={TextField}
        />
        <Button type='default' shape='circle' icon='search' size='large' htmlType='submit' style={style.button} />
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
