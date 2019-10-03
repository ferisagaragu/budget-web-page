import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import TablePdfComponent from './table-pdf/table-pdf.component';
import HeaderPdfComponent from './header-pdf/header-pdf.component';
import { BudgetModel } from '../../core/models/budget.model';
import FirmPdfComponent from './firm-pdf/firm-pdf.component';
import TermPdfComponent from './term-pdf/term-pdf.component';
import { UserDataModel } from '../../core/models/user-data.model';

interface Props { 
  userData: UserDataModel,
  selectedBudget: BudgetModel
}

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

class PdfView extends Component<Props, State> {
  render() {
    const { userData, selectedBudget } = this.props;

    return (
      <PDFViewer className="pdf">
        <Document 
          title={ selectedBudget.name }
        >
          <Page size="letter" style={ styles.page }>
            <View style={ styles.root }>
              <HeaderPdfComponent 
                dataHeader={ selectedBudget }
              /> 

              <TablePdfComponent 
                dataTable={ selectedBudget.budgetTable }
              /> 

              <FirmPdfComponent 
                name={ userData.name }
                client={ selectedBudget.for }
              />

              <TermPdfComponent
                term={ selectedBudget.term }
              /> 
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData,
  selectedBudget: state.selectedBudget
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(PdfView);