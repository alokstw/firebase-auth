import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Cards, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
state = { email: '', password: '', error: '', loading: false };
onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(
    () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailed.bind(this));
    }
  );
}
onLoginSuccess() {
  this.setState({
    error: '',
    loading: false,
    email: '',
    password: ''
  });
}
onLoginFailed() {
  this.setState({
    error: 'Authentication Failed !',
    loading: false
  });
}
renderButton() {
  if (this.state.loading) {
    return <Spinner size='small' />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Login Here
    </Button>
  );
}
render() {
  return (
      <Cards>
        <CardSection>
          <Input
          placeholder='user@email.com'
          label='Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        </CardSection>
        <Text style={Styles.errorStyling}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Cards>
  );
}
}

const Styles = {
  errorStyling: {
    alignSelf: 'center',
    fontSize: 20
  }
};

export default LoginForm;
