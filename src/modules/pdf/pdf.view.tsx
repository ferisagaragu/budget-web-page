import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface Props { }

interface State { }

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  table: {  
    borderStyle: 'solid', 
    borderWidth: 1,
    borderLeftWidth: 0, 
    borderRightWidth: 0,
    marginTop: 10,
    marginLeft: 10, 
    marginRight: 10
  },
  tableHeader: { 
    flexDirection: 'row',
    backgroundColor: '#00796b'
  },
  tableCellHeader: { 
    marginTop: 5, 
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tableRow: { 
    flexDirection: 'row' 
  },
  tableCol: { 
    width: '25%', 
    borderStyle: 'solid', 
    borderWidth: 1,  
    borderTopWidth: 0 
  },
  tableCell: { 
    marginTop: 5, 
    fontSize: 12,
    textAlign: 'center'
  }
});

const data = {
  description: 'Soy una descripcion',
  unitPrice: '100 MNX',
  pice: '12 pzas',
  total: '12, 000 MNX' 
}

class PdfView extends Component<Props, State> {
  render() {
    return (
      <PDFViewer className="pdf">
        <Document>
          <Page size="letter" style={ styles.page }>
            <View style={ styles.table }>
              <View style={ styles.tableHeader }> 
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCellHeader }>
                    Descripción
                  </Text> 
                </View>

                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCellHeader }>
                    Precio unitario
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCellHeader }>
                    Numero de piezas
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCellHeader }>
                    Total
                  </Text> 
                </View> 
              </View> 
              
              <View style={ styles.tableRow }> 
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    React-PDF
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    3 User 
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    2019-02-20 - 2020-02-19
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    5€
                  </Text> 
                </View> 
              </View>

              <View style={ styles.tableRow }> 
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    React-PDF
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    3 User 
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    2019-02-20 - 2020-02-19
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    5€
                  </Text> 
                </View> 
              </View>  
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