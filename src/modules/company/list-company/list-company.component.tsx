import React, { Component } from 'react';
import ItemCompanyComponent from '../item-company/item-company.component';
import { CompanyModel } from '../../../core/models/company.model';
import key from '../../../shared/key/react-elements.key';
import './list-company.css';

interface Props { 
  company: Array<CompanyModel>;
  onDrop: Function;
}

interface State { }

class ListCompanyComponent extends Component<Props, State> {
  render() {
    const { company, onDrop } = this.props;

    return (
      <>
        {
          company ? 
            <>
              {
                company.length !== 0 ?
                  company.map((company: CompanyModel) => (
                    <ItemCompanyComponent
                      key={ key() }
                      label={ company.label }
                      onDrop={ () => onDrop(company) }
                    />
                  ))
                :
                  <div className="text-center">
                    No tienes compañias registradas
                  </div>
              }
            </>
          :
            <div>Cargando...</div>  
        }
      </>
    );
  }
}

export default ListCompanyComponent;