import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import HeaderView from '../header/header.view';
import { Container, Row } from 'react-bootstrap';
import CardBudgetComponent from './card-budget/card-budget.component';
import AddBudgetComponent from './add-budget/add-budget.component';

interface Props { }

interface State { }

class HomeView extends Component<Props, State> {
  render() {
    return (
      <>
        <HeaderView />
        
        <Container>
          <Row className="justify-content-md-center">
            <AddBudgetComponent />
            <CardBudgetComponent />
            <CardBudgetComponent />
            <CardBudgetComponent />
            <CardBudgetComponent />
            <CardBudgetComponent />
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ });

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);