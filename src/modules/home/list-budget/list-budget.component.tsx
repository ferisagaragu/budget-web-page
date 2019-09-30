import React, { Component } from 'react';
import { BudgetModel } from '../../../core/models/budget.model';
import CardBudgetComponent from '../card-budget/card-budget.component';
import key from '../../../shared/key/react-elements.key';
import './list-budget.css';

interface Props {
  budgets: Array<BudgetModel>;
  onDrop: Function;
}

interface State { }

class ListBudgetComponent extends Component<Props, State> {
  render() {
    const { budgets, onDrop } = this.props;

    return (
      budgets &&
        <>
          {
            budgets.map((budget: BudgetModel) => (
              <CardBudgetComponent 
                key={ key() }
                budget={ budget }
                onDrop={ () => onDrop(budget.uid) }
              />
            ))
          }
          
        </>
    );
  }
}

export default ListBudgetComponent;