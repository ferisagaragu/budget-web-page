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
    color: '#616161',
    fontSize: 10
  }
});

class HeaderPdfComponent extends Component<Props, State> {
  render() {
    const { dataHeader } = this.props;

    return (
      <>
        <View style={ styles.header }> 
          <Text style={ styles.headerText }>
            Fecha: { dataHeader.date }
          </Text> 

          <Text style={ styles.headerText }>
            Fecha de vencimiento: { dataHeader.dateEnd }
          </Text> 

          <Text style={ styles.headerText }>
            Para: { dataHeader.for }
          </Text> 

          <Text style={ styles.headerText }>
            { dataHeader.company }
          </Text> 

          <Text style={ styles.headerText }>
            { dataHeader.address }
          </Text>

          <Text style={ styles.headerText }>
            { dataHeader.phoneNumber }
          </Text>
        </View>
      </>
    );
  }
}

export default HeaderPdfComponent;