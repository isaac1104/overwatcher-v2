import { createComponent, customMap } from 'redux-form-antd';
import { Input } from 'antd';
const { Search } = Input;

function mapFunction(mapProps, { input: { onChange } } ) {
  return {
    ...mapProps,
    onChange: event => onChange(event.nativeEvent.target.value),
  };
}
const textFieldMap = customMap(mapFunction);

const FormField = createComponent(Search, textFieldMap);

export default FormField;
