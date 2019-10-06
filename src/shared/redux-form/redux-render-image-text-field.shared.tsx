import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/stylesheet/form.css';

interface Props { 
  input: any;
  label: string;
  type: string;
  className: string;
  onKeyUp: Function;
  disabled: string;
  img: string;
  imgClassName: string;
  meta: any;
}

interface State { }

class RenderImageTextField extends Component<Props, State> {
  render () {
    const {
      input,
      label,
      type,
      className,
      onKeyUp,
      img,
      imgClassName,
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
        <Row>
          <Col md={ 2 }>
            <img 
              className={ imgClassName ? imgClassName : 'img-field' }
              alt="ImageTextField" 
              src={ img ? img : 'https://www.oatey.com/ASSETS/WEB_THEMES//OATEY/images/NoImage.png' } 
            />
          </Col>

          <Col md={ 10 }>
            <input
              className={ `${className} ${errorClass}` }
              { ...input }
              placeholder={ label }
              type={ type }
              onKeyUp={ onKeyUp }
            />
            {
              touched &&
                ((error && <div className="text-danger">{ error }</div>) ||
                (warning && <div>{ warning }</div>))
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default RenderImageTextField;