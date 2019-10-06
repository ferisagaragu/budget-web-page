import React, { Component } from 'react';
import '../../styles/stylesheet/form.css';

interface Props { 
  input: any;
  label: string;
  type: string;
  className: string;
  onKeyUp: Function;
  disabled: string;
  meta: any;
}

interface State { }

class RenderTextField extends Component<Props, State> {
  render () {
    const {
      input,
      label,
      type,
      className,
      onKeyUp,
      disabled,
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
          <input
            className={ `${className} ${errorClass}` }
            { ...input }
            placeholder={ label }
            type={ type }
            onKeyUp={ onKeyUp }
            disabled={ disabled }
          />
          {
            touched &&
              ((error && <div className="text-danger">{ error }</div>) ||
              (warning && <div>{ warning }</div>))
          }
        </div>
      </div>
    );
  }
}

export default RenderTextField;