import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { UserDataModel } from '../../core/models/user-data.model';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../core/actions/user-data.actions';
import { alertQuestion } from '../../shared/swal/swal.shared';

interface Props { 
  userData: UserDataModel;
  logout: Function;
}

interface State { }

class HeaderView extends Component<Props, State> {
  
  private onLogout() {
    const { userData, logout } = this.props;
    
    alertQuestion(
      'question',
      'Cerrar sesión',
      '¿Estas seguro que deseas cerrar sesión?',
      () => {
        logout(userData.name);
      }
    );
  }
  
  render() {
    const { userData } = this.props;

    return (
      <>
        <header>
          <Row>
            <Col md={ 1 }>
              <img alt="user_image" src={ userData.photo } />
            </Col>

            <Col className="mt-1" md={ 10 }>
              <h4>Bienvenid@ { userData.name }</h4>
            </Col>

            <Col md={ 1 }>
              <Button 
                onClick={ () => this.onLogout() }
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