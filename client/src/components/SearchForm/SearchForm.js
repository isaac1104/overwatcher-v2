import React, { Component } from 'react';
import { Button, message } from 'antd';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Form extends Component {
  formSubmit = ({ title }) => {
    const displayMsg = () => {
      if (this.props.movieData.data.Error) {
        message.error('Movie info not found!', 2);
      } else {
        message.success('Movie info successfully fetched!', 2);
      }
    }
    this.props.fetchMovieData(title, displayMsg);
  }

  render() {
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
          name="title"
          component={FormField}
        />
        <Button type="default" shape="circle" icon="search" size='large' htmlType='submit' style={{ marginLeft: '10px' }} />
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.title) {
    errors.title = 'Battletag is required!'
  }
  return errors;
}

function mapStateToProps({ movieData }) {
  return {
    movieData
  }
}

export default reduxForm({
  validate,
  form: 'title'
})(connect(mapStateToProps, null)(Form));
