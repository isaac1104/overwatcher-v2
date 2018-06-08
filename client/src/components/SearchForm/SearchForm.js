import React, { Component } from 'react';
import { Button, message } from 'antd';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Form extends Component {
  formSubmit = ({ battletag }) => {
    console.log(battletag);
    this.props.history.push(`/player/${battletag}`);
  }

  render() {
    console.log(this.props.history);
    const { handleSubmit } = this.props;
    const style = {
      form: {
        display: 'flex',
        alignItems: 'center'
      }
    }
    return (
      <form onSubmit={handleSubmit(this.formSubmit)} style={style.form}>
        <Field
          name="battletag"
          component={FormField}
        />
        <Button type="default" shape="circle" icon="search" size='large' htmlType='submit' style={{ marginLeft: '10px' }} />
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

function mapStateToProps({ movieData }) {
  return {
    movieData
  }
}

export default withRouter(
  reduxForm({
  validate,
  form: 'battletag'
})(connect(mapStateToProps, null)(Form)));
