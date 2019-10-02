import React, { Component } from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import './term-pdf.css';

interface Props { 
  term: string;
}

interface State { }

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 11
  }
});

class TermPdfComponent extends Component<Props, State> {
  render() {
    const { term } = this.props;

    return (
      <Text style={ styles.text }>
        { term }
      </Text> 
    );
  }
}

export default TermPdfComponent;