import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import TablePdfComponent from './table-pdf/table-pdf.component';
import HeaderPdfComponent from './header-pdf/header-pdf.component';
import { BudgetModel } from '../../core/models/budget.model';
import FirmPdfComponent from './firm-pdf/firm-pdf.component';
import TermPdfComponent from './term-pdf/term-pdf.component';

interface Props { }

interface State { }

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  root: {  
    marginTop: 10,
    marginLeft: 15, 
    marginRight: 15,
  }
});

const dataTable = [{
  description: 'Remplazo de cableado y rectificación de cableado',
  unitPrice: '100 MNX',
  pice: '12 pzas',
  total: '12, 000 MNX' 
},{
  description: 'Remplazo de contactos y apagadores',
  unitPrice: '100 MNX',
  pice: '12 pzas',
  total: '12, 000 MNX' 
},{
  description: 'Adecuación de líneas de alimentación, iluminación y contactos',
  unitPrice: '3800 MNX',
  pice: '1 pzas',
  total: '3800 MNX' 
},{
  description: 'Adecuación de líneas de alimentación, iluminación y contactos',
  unitPrice: '3800 MNX',
  pice: '1 pzas',
  total: '3800 MNX' 
},{
  description: 'Adecuación de líneas de alimentación, iluminación y contactos',
  unitPrice: '3800 MNX',
  pice: '1 pzas',
  total: '3800 MNX' 
},{
  description: 'Adecuación de líneas de alimentación, iluminación y contactos',
  unitPrice: '3800 MNX',
  pice: '1 pzas',
  total: '3800 MNX' 
},{
  description: 'Adecuación de líneas de alimentación, iluminación y contactos',
  unitPrice: '3800 MNX',
  pice: '1 pzas',
  total: '3800 MNX' 
}]

class PdfView extends Component<Props, State> {
  render() {
    return (
      <PDFViewer className="pdf">
        <Document>
          <Page size="letter" style={ styles.page }>
            <View style={ styles.root }>
              <HeaderPdfComponent 
                dataHeader={ new BudgetModel({
                  uid: '',
                  name: '',
                  date: '02 - septiembre - 2019',
                  dateEnd: '02 - septiembre - 2019',
                  for: 'Pedro man',
                  company: 'FerGarGod',
                  phoneNumber: '33 23 81 47 52',
                  address: 'Valle de las flores 107'
                }) }
              /> 

              <TablePdfComponent 
                dataTable={ dataTable }
              /> 

              <TermPdfComponent
                term={ 
                  'Este es un presupuesto sobre los bienes nombrados, sujeto a las condiciones indicadas a continuación:' +
                  'Para aceptar este presupuesto, firme aquí y envíenos este documento:' +
                  'Gracias por su transacción'
                }
              /> 
              
              <FirmPdfComponent 
                name="Fernando Isaías García Aguirre"
                client="Fernando García Godina"
              />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(PdfView);