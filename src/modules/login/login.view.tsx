import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormRegistComponent from './form-regist/form-regist.component';
import FormLoginComponent from './form-login/form-login.component';
import { login, registerUser } from '../../core/actions/user-data.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import StatusLoginComponent from './status-login/status-login.component';

interface Props {
  login: Function;
  registerUser: Function;
  userData: UserDataModel;
  statusLogin: boolean;
}

interface State { 
  showRegist: boolean;
}

class LoginView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showRegist: false
    }
  }

  private showRegistModel() {
    const { showRegist } = this.state;
    this.setState({ showRegist: !showRegist });
  }

  render() {
    const { login, statusLogin, registerUser } = this.props;
    const { showRegist } = this.state;

    return (
      <Container>
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
                    />
                }
                {
                  statusLogin && 
                    <StatusLoginComponent />
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
  registerUser: (userRegist: any) => dispatch(registerUser(userRegist))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);