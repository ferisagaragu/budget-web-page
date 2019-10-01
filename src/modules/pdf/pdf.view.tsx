import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TablePdfComponent from './table-pdf/table-pdf.component';
import HeaderPdfComponent from './header-pdf/header-pdf.component';
import { BudgetModel } from '../../core/models/budget.model';

interface Props { }

interface State { }

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  root: {  
    marginTop: 10,
    marginLeft: 15, 
    marginRight: 15
  },

  text: {
    marginTop: 10
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
                  date: new Date(),
                  dateEnd: new Date(),
                  for: 'Pedro man',
                  company: 'FerGarGod',
                  phoneNumber: '33 23 81 47 52',
                  address: 'Valle de las flores 107'
                }) }
              /> 

              <TablePdfComponent 
                dataTable={ dataTable }
              /> 

              <Text style={ styles.text }>
                Este es un presupuesto sobre los bienes nombrados, sujeto a las condiciones indicadas a continuación:
              </Text> 
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