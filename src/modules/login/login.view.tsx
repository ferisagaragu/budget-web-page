import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormRegistComponent from './form-regist/form-regist.component';
import FormLoginComponent from './form-login/form-login.component';
import { login, registerUser, recoverPassword } from '../../core/actions/user-data.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator';
import { ModalCenteredComponent } from '../../shared/modal/modal.component';
import FormRecoverPasswordComponent from './form-recover-password/form-recover-password.component';

interface Props {
  login: Function;
  registerUser: Function;
  recoverPassword: Function;
  userData: UserDataModel;
  statusLogin: boolean;
}

interface State { 
  showRegist: boolean;
  showRecover: boolean;
}

class LoginView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showRegist: false,
      showRecover: false
    }
  }

  private showRegistModel() {
    const { showRegist } = this.state;
    this.setState({ showRegist: !showRegist });
  }

  private recoverPasswordModal(formData: any) {
    const { recoverPassword } = this.props;
    recoverPassword(formData.email); 
    this.setState({ showRecover: false })
  }

  render() {
    const { login, statusLogin, registerUser } = this.props;
    const { showRegist, showRecover } = this.state;

    return (
      <Container>
        <ModalCenteredComponent 
          title="Recuperar contraseña"
          modalShow={ showRecover }
          body={ 
            <FormRecoverPasswordComponent 
              submitActions={ (formData: any) => this.recoverPasswordModal(formData) }
              cancel={ () => this.setState({ showRecover: false }) }
            /> 
          }
          onHide={ () => this.setState({ showRecover: false }) }
          size="lg"
        />

        <Row className="justify-content-md-center mt-5">
          <Col md={ 4 }>
            <Card>
              <Card.Body>
                {
                  showRegist ? 
                    <FormRegistComponent 
                      submitActions={ (formData: any) => registerUser(formData) }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ !statusLogin }
                    />
                  :
                    <FormLoginComponent 
                      submitActions={ (formData: any) => login(formData.email, formData.password) }
                      cancel={ () => this.showRegistModel() }
                      showButtons={ !statusLogin }
                      recoverPassword={ () => this.setState({ showRecover: true }) }
                    />
                }
                {
                  statusLogin && 
                    <LoadingIndicatorComponent />
                }
              </Card.Body>
            </Card>  
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  statusLogin: state.statusLogin
});

const mapDispatchToProps = (dispatch: Function) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  registerUser: (userRegist: any) => dispatch(registerUser(userRegist)),
  recoverPassword: (email: any) => dispatch(recoverPassword(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);