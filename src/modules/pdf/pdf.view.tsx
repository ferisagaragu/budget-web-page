import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import TablePdfComponent from './table-pdf/table-pdf.component';
import HeaderPdfComponent from './header-pdf/header-pdf.component';
import { BudgetModel } from '../../core/models/budget.model';
import FirmPdfComponent from './firm-pdf/firm-pdf.component';
import TermPdfComponent from './term-pdf/term-pdf.component';
import { UserDataModel } from '../../core/models/user-data.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props { 
  userData: UserDataModel,
  selectedBudget: BudgetModel,
  viewer: boolean;
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
    const { userData, selectedBudget, viewer } = this.props;
    
    return (
      <>
        {
          viewer ? 
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
                      workforce={ selectedBudget.workforce }
                      total={ selectedBudget.total }
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
          :  
            <PDFDownloadLink 
              className="btn btn-info mr-3"
              document={
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
                        workforce={ selectedBudget.workforce }
                        total={ selectedBudget.total }
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
              } 
              fileName={ selectedBudget.name }
            >
              <FontAwesomeIcon icon="download" />
              &nbsp;
              Descargar el PDF
            </PDFDownloadLink>
        }
      </>
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