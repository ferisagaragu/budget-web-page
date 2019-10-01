import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { BudgetTableModel } from '../../../core/models/budget-table.model';
import './table-pdf.css';

interface Props { 
  dataTable: Array<BudgetTableModel>;
}

interface State { }

const styles = StyleSheet.create({
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
  }
});

class TablePdfComponent extends Component<Props, State> {
  render() {
    const { dataTable } = this.props;

    return (
      <>
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
          dataTable.map((data: BudgetTableModel) => (
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
      </>
    );
  }
}

export default TablePdfComponent;