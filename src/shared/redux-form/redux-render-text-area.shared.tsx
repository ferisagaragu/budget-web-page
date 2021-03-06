import React, { Component } from 'react';
import '../../styles/stylesheet/form.css';

interface Props { 
  input: any;
  label: string;
  className: string;
  meta: any;
}

interface State { }

class RenderTextArea extends Component<Props, State> {
  render () {
    const {
      input,
      label,
      className,
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
          <textarea
            className={ `${className} ${errorClass}` }
            {...input}
            placeholder={ label }
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

export default RenderTextArea;