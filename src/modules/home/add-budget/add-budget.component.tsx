import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalComponent } from '../../../shared/modal/modal.component';
import FormCreateBudgetComponent from '../form-create-budget/form-create-budget.component';
import moment from 'moment';
import { BudgetModel } from '../../../core/models/budget.model';
import CompanyView from '../../company/company.view';
import './add-budget.css';

interface Props { 
  submitActions: Function;
}

interface State { 
  showModal: boolean;
  showModalCompany: boolean;
}

class AddBudgetComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false,
      showModalCompany: false
    }
  }
  
  private submit(formData: BudgetModel): void {
    const { showModal } = this.state;
    const { submitActions } = this.props;

    submitActions(formData);
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal, showModalCompany } = this.state;

    return (
      <>
        <ModalComponent 
          title="Nuevo presupuesto"
          modalShow={ showModal }
          body={ 
            <FormCreateBudgetComponent
              initialValues={ 
                { 
                  date: moment().format("DD - MMMM - YYYY"),
                  dateEnd: moment().format("DD - MMMM - YYYY"),
                  company: { value: '1', label: 'FerGarGod' }
                } 
              } 
              cancel={ () => this.setState({ showModal: !showModal }) }
              submitActions={ (formData: BudgetModel) => this.submit(formData) }
            /> 
          }
          onHide={ () => this.setState({ showModal: !showModal }) }
          size="xl"
        />

        <ModalComponent 
          title="Crear una nueva compañia"
          modalShow={ showModalCompany }
          body={ 
            <>
              <CompanyView />
            </>
          }
          onHide={ () => this.setState({ showModalCompany: !showModalCompany }) }
          size="xl"
        />

        <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
          <Card className="card-add">
            <Card.Body>
              <Card.Title>
                Nuevo presupuesto
              </Card.Title>

              <Card.Subtitle 
                className="mb-2 text-muted"
              >
                Crea un nuevo presupuesto
              </Card.Subtitle>

              <Card.Text className="text-center mt-5">
                <Button 
                  variant="outline-success"
                  className="btn btn-circle btn-xl mr-3"
                  onClick={ () => this.setState({ showModal: true }) }
                >
                  <FontAwesomeIcon icon="calculator" />
                </Button>

                <Button 
                  variant="outline-info"
                  className="btn btn-circle btn-xl"
                  onClick={ () => this.setState({ showModalCompany: true }) }
                >
                  <FontAwesomeIcon icon="user-plus" />
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default AddBudgetComponent;