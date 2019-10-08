import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CompanyModel } from '../../../core/models/company.model';
import './item-edit-company.css';

interface Props { 
  value: CompanyModel;
  onCancel: Function;
  onEdit: Function;
}

interface State { 
  renderValue: string;
  styleError: string;
}

class ItemEditCompanyComponent extends Component<Props, State> {
  
  companyInput: any;

  constructor(props: Props) {
    super(props);
    const { value } = this.props;
    
    this.state = {
      renderValue: value.label,
      styleError: ''
    }

    this.companyInput = React.createRef();
  }

  private onSave(): void {
    const inputValue = this.companyInput.current;
    const { onEdit, value } = this.props;
    
    if (inputValue.value) {
      this.setState({ styleError: '' });
      value.label = inputValue.value;
      onEdit(value);
    } else {
      this.setState({ styleError: 'error' });
    }
  }

  private onChange(input: any): void {
    if (input.value) {
      this.setState({ styleError: '' });
    } else {
      this.setState({ styleError: 'error' });
    }

    this.setState({ renderValue: input.value })
  }
  
  render() {
    const { renderValue, styleError } = this.state;
    const { onCancel } = this.props;

    return (
      <Row className="item-list">
        <Col md={ 10 }>
          <input
            ref={ this.companyInput }
            className={ `form-control field-text ${styleError}` }
            value={ renderValue ? renderValue : '' }
            onChange={ (evt: any) => this.onChange(evt.target) }
          />

          {
            styleError &&
              <label className="text-danger">
                El nombre de la compañia es requerido
              </label>
          }
        </Col>

        <Col className="buttons-action" md={ 2 }>
          <Button 
            className="btn btn-circle btn-lg mr-3"
            type="submit" 
            variant="outline-success"
            onClick={ () => this.onSave() }
          >
            <FontAwesomeIcon icon="check" />
          </Button>

          <Button 
            className="btn btn-circle btn-lg"
            variant="outline-danger"
            onClick={ () => onCancel(renderValue) }
          >
            <FontAwesomeIcon icon="times" />
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ItemEditCompanyComponent;