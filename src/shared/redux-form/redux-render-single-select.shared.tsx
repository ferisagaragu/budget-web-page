import React, { Component } from 'react';
import { SingleSelect } from '../select/select';

interface Props { 
  input: any;
  label: string;
  className: string;
  onKeyUp: Function;
  onChange: Function;
  noOptionsMessage: string;
  defaultValue: any;
  options: Array<any>;
  meta: any;
}

interface State {
  defaultValue: any;
}

class renderSingleSelect extends Component<Props, State> {
  render () {
    const {
      input,
      label,
      className,
      onKeyUp,
      noOptionsMessage,
      defaultValue,
      options,
      meta: {
        error,
        warning,
        touched
      }
    } = this.props;

    const errorClass = touched && error ? 'error' : '';

    return (
      <div className="mb-3">
      <label>
        <b>
          { label }
        </b>
      </label>
      <div>
        <SingleSelect 
          className={ `${className} ${errorClass}` }
          { ...input }
          options={ options } 
          onChange={ (value: any) => input.onChange(value) }
          onKeyUp={ onKeyUp }
          onBlur={ () => input.onBlur(input.value) }
          placeholder={ label }
          noOptionsMessage={ noOptionsMessage }
          defaultValue={ defaultValue }
        />
        {
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
        }
      </div>
    </div>
    )
  }
}

export default renderSingleSelect;