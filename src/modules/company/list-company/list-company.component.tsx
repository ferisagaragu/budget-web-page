import React, { Component } from 'react';
import ItemCompanyComponent from '../item-company/item-company.component';
import { CompanyModel } from '../../../core/models/company.model';
import key from '../../../shared/key/react-elements.key';
import ItemEditCompanyComponent from '../item-edit-company/item-edit-company.component';
import './list-company.css';

interface Props { 
  company: Array<CompanyModel>;
  onDrop: Function;
  onEdit: Function;
}

interface State { 
  selectedEdit: string;
}

class ListCompanyComponent extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      selectedEdit: ''
    }
  }

  private onEdit({ uid }: any): void {
    this.setState({ selectedEdit: uid });
  }

  render() {
    const { company, onDrop, onEdit } = this.props;
    const { selectedEdit } = this.state;

    return (
      <>
        {
          company ? 
            <div>
              {
                company.length !== 0 ?
                  company.map((company: CompanyModel) => {

                    if (company.value.uid === selectedEdit) {
                      localStorage.setItem('listForm',`form${selectedEdit}`);
                      return (
                        <ItemEditCompanyComponent 
                          key={ key() }
                          value={ company }
                          onCancel={ () => this.setState({ selectedEdit: '' }) }
                          onEdit={ () => {} }
                        />
                      );
                    } else {
                      return (
                        <ItemCompanyComponent
                          key={ key() }
                          label={ company.label }
                          onDrop={ () => onDrop(company) }
                          onEdit={ () => this.onEdit(company.value) }
                        />
                      );
                    }
                  })
                :
                  <div className="text-center">
                    No tienes compañias registradas
                  </div>
              }
            </div>
          :
            <div>Cargando...</div>  
        }
      </>
    );
  }
}

export default ListCompanyComponent;