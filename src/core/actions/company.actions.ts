import { Action } from '../interfaces/action.interface';
import { alert } from '../../shared/swal/swal.shared';
import { CompanyReducerEnum } from '../enums/company-reducer.enum';
import CompanyService from '../http/company.service';
import { CompanyModel } from '../models/company.model';

const companyService = new CompanyService();

export function setBudgets(payload: any): Action {
  return { type: CompanyReducerEnum.SET_COMPANY, payload };
}

export function getCompany(uid: string): Function {
  return async (dispatch: Function) => {
    companyService.getCompany(uid, 
      (data: Array<CompanyModel>) => {
        dispatch(setBudgets(data));
      }
    );
  }
}

export function createCompany(uid: string, companyData: CompanyModel): Function {
  return async (dispatch: Function) => {
    companyService.createCompany(uid, companyData, 
      (error: any) => {
        alert('error', 'Upps', 'Hubo un problema al guardar la compañia');
      }
    );
  }
}