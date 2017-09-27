import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Cards, CardSection } from './common';
import LoginForm from './LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDK9nSt-d0Wr_xQnchtVOJXMOtyO69cNt8',
    authDomain: 'auth-dd966.firebaseapp.com',
    databaseURL: 'https://auth-dd966.firebaseio.com',
    projectId: 'auth-dd966',
    storageBucket: 'auth-dd966.appspot.com',
    messagingSenderId: '473628792683'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Cards>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        </Cards>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size='large' />;

    }
  }
 render() {
   return (
     <View>
      <Header HeaderText='Firebase Auth' />
      {this.renderContent()}
     </View>
   );
 }
}

export default App;
