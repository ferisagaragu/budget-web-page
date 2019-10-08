import React, { Component } from 'react';
import { connect, reset } from '../../imports/react-redux.import';
import { Container } from 'react-bootstrap';
import ListCompanyComponent from './list-company/list-company.component';
import { CompanyModel } from '../../core/models/company.model';
import FormCreateCompanyComponent from './form-create-company/form-create-company.component';
import { createCompany, getCompany, removeCompany, updateCompany } from '../../core/actions/company.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { FormCreateCompanyReducerEnum } from '../../core/enums/form-create-company-reducer.enum';
import { alertQuestion } from '../../shared/swal/swal.shared';

interface Props { 
  userData: UserDataModel;
  company: Array<CompanyModel>;
  createCompany: Function;
  getCompany: Function;
  resetForm: Function;
  removeCompany: Function;
  updateCompany: Function;
}

interface State { }

class CompanyView extends Component<Props, State> {
  
  componentDidMount() {
    const { getCompany, userData } = this.props;
    getCompany(userData.uid);
  }
  
  private onSaveCompany(formData: any): void {
    const { createCompany, userData, resetForm } = this.props;

    createCompany(userData.uid, new CompanyModel({
      label: formData.company,
      value: { uid: '' }
    }));

    resetForm();
  }
  
  private onDropCompany(companyData: CompanyModel): void {
    const { userData, removeCompany } = this.props;

    alertQuestion(
      'question', 
      'Eliminar compañia', 
      '¿Estas seguro que deseas eliminar la compañia?', 
      () => {
        removeCompany(userData.uid, companyData.value.uid);
      }
    );
  }

  private onEditCompany(companyData: CompanyModel): void {
    const { userData, updateCompany } = this.props;
    updateCompany(userData.uid, companyData.value.uid, companyData);
  }

  render() {
    const { company } = this.props;

    return (
      <Container>
        <FormCreateCompanyComponent 
          submitActions={ (formData: any) => this.onSaveCompany(formData) }
          cancel={ () => {} }
        />

        <ListCompanyComponent 
          company={ company }
          onDrop={ (companyData: CompanyModel) => this.onDropCompany(companyData) }
          onEdit={ (companyData: CompanyModel) => this.onEditCompany(companyData) }
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  company: state.company
});

const mapDispatchToProps = (dispatch: Function) => ({
  createCompany: (uid: string, companyData: CompanyModel) => dispatch(createCompany(uid,companyData)),
  getCompany: (uid: string) => dispatch(getCompany(uid)),
  resetForm: () => dispatch(reset(FormCreateCompanyReducerEnum.FORM_CREATE_COMPANY_SUBMIT)),
  removeCompany: (uid: string, companyId: string) => dispatch(removeCompany(uid, companyId)),
  updateCompany: (uid: string, companyId: string, data: CompanyModel) => dispatch(updateCompany(uid, companyId, data))
});

export default connect(mapStateToProps,mapDispatchToProps)(CompanyView);