import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const FormField = ({ input }) => {
  return (
    <Search
      {...input}
      autoComplete='off'
    />
  );
}

export default FormField;
