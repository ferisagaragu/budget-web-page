import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import './firm-pdf.css';

interface Props { 
  name: string;
  client: string;
}

interface State { }

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 80
  },
  col: { 
    width: '45%', 
    borderStyle: 'solid', 
    borderWidth: 2,  
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0
  },
  text: { 
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 3
  }
});

class FirmPdfComponent extends Component<Props, State> {
  render() {
    const { name, client } = this.props;

    return (
      <>
        <View style={ styles.row }> 
          <View style={ styles.col }> 
            <Text style={ styles.text }>
              { name }
            </Text> 
          </View> 
          
          <View style={ styles.col }> 
            <Text style={ styles.text }>
              { client }
            </Text> 
          </View> 

        </View> 
      </>
    );
  }
}

export default FirmPdfComponent;