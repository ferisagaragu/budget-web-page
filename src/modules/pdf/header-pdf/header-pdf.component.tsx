import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { BudgetModel } from '../../../core/models/budget.model';
import './header-pdf.css';

interface Props { 
  dataHeader: BudgetModel;
}

interface State { }

const styles = StyleSheet.create({  
  header: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'right'
  },
  headerText: {
    marginTop: 5,
    color: '#616161'
  }
});

class HeaderPdfComponent extends Component<Props, State> {
  render() {
    const { dataHeader } = this.props;

    return (
      <>
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
      </>
    );
  }
}

export default HeaderPdfComponent;