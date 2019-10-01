import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
  tableHeader: { 
    flexDirection: 'row',
    backgroundColor: '#00796b',
    height: 35
  },
  tableCellHeader: { 
    marginTop: 10, 
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tableCellTotal: { 
    fontSize: 16,
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
  tableColTotal: { 
    width: '25%', 
    borderStyle: 'solid', 
    borderWidth: 1,  
    borderTopWidth: 0,
    backgroundColor: '#00796b'
  },
  tableColInvisible: {
    width: '25%'
  },
  tableCell: { 
    marginTop: 5, 
    fontSize: 12,
    textAlign: 'center'
  },
  totalCell: {
    marginTop: 5, 
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    marginTop: 10
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'right'
  },
  headerText: {
    marginTop: 5,
    color: '#bdbdbd'
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

              <View style={ styles.header }> 
                <Text style={ styles.headerText }>
                  Fecha: 01-05-2018
                </Text> 

                <Text style={ styles.headerText }>
                  Fecha de vencimiento: 20-05-2018
                </Text> 

                <Text style={ styles.headerText }>
                  Para: Víctor Morales
                </Text> 

                <Text style={ styles.headerText }>
                  FerGarGod
                </Text> 

                <Text style={ styles.headerText }>
                  Valle de los agapandos 107
                  Tlajomulco de Zuñiga 45640
                </Text>

                <Text style={ styles.headerText }>
                  3312405018
                </Text>
              </View>

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
              
              {
                dataTable.map((data: any) => (
                  <View style={ styles.tableRow }> 
                    <View style={ styles.tableCol }> 
                      <Text style={ styles.tableCell }>
                        { data.description }
                      </Text> 
                    </View> 
                    
                    <View style={ styles.tableCol }> 
                      <Text style={ styles.tableCell }>
                        { data.unitPrice } 
                      </Text> 
                    </View> 
                    
                    <View style={ styles.tableCol }> 
                      <Text style={ styles.tableCell }>
                        { data.pice }
                      </Text> 
                    </View> 
                    
                    <View style={ styles.tableCol }> 
                      <Text style={ styles.tableCell }>
                        { data.total }
                      </Text> 
                    </View> 
                  </View>
                ))
              }

              <View style={ styles.tableRow }> 
                <View style={ styles.tableColInvisible } /> 
                
                <View style={ styles.tableColInvisible } /> 
                
                <View style={ styles.tableColTotal }> 
                  <Text style={ styles.tableCellTotal }>
                    Mano de obra
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    500 MNX
                  </Text> 
                </View> 
              </View>

              <View style={ styles.tableRow }> 
                <View style={ styles.tableColInvisible } /> 
                
                <View style={ styles.tableColInvisible } /> 
                
                <View style={ styles.tableColTotal }> 
                  <Text style={ styles.tableCellTotal }>
                    Total
                  </Text> 
                </View> 
                
                <View style={ styles.tableCol }> 
                  <Text style={ styles.tableCell }>
                    500 MNX
                  </Text> 
                </View> 
              </View>

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