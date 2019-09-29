import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { UserDataModel } from '../../core/models/user-data.model';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../core/actions/user-data.actions';

interface Props { 
  userData: UserDataModel;
  logout: Function;
}

interface State { }

class HeaderView extends Component<Props, State> {
  render() {
    const { userData, logout } = this.props;

    return (
      <>
        <header>
          <Row>
            <Col className="mt-1" md={ 11 }>
              <h4>Bienvenid@ { userData.name }</h4>
            </Col>

            <Col md={ 1 }>
              <Button 
                onClick={ () => logout(userData.name) }
                variant="outline-dark"
              >
                <FontAwesomeIcon icon="sign-out-alt" />
                &nbsp;
                Salir
              </Button>
            </Col>
          </Row>
        </header>
        <br/><br/><br/>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  logout: (name: string) => dispatch(logout(name))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderView);