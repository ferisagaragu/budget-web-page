import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import './term-pdf.css';

interface Props { 
  term: string;
}

interface State { }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    maxWidth: '100%'
  },
  text: {
    fontSize: 11,
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    color: '#616161'
  }
});

class TermPdfComponent extends Component<Props, State> {
  render() {
    const { term } = this.props;

    return (
      <View style={ styles.row }>
        <Text style={ styles.text }>
          { term }
        </Text> 
      </View>
    );
  }
}

export default TermPdfComponent;