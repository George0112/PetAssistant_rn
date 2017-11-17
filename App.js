/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StyleProvider} from 'native-base';
//Navigation
import {StackNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';
//redux
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

//import MyComponent from './src/navigation';
//import MyApp from './src/MyApp.js';
import LoginScreen from './src/component/LoginScreen'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = StackNavigator({
  Login: {screen: LoginScreen}
}, {
  headerMode: 'none'
});

class AppWithStyleAndNavigator extends React.Component {
  render() {
      return (
          <StyleProvider>
              <AppNavigator navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav
              })}/>
          </StyleProvider>
      );
  }

  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', () => {
          const {dispatch, nav} = this.props;
          if (nav.index === 0)
              return false;
          dispatch(NavigationActions.back())
          return true;
      });
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress');
  }
}

// Nav reducer
const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'Login'}));
const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

// Create Redux store
const store = createStore(combineReducers({
    nav
}), compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

// Connect redux
const AppWithNavState = connect(state => ({
  nav: state.nav
}))(AppWithStyleAndNavigator);

export default class App extends Component {
  render() {
      return (
        <LoginScreen/>
      );
  }
}
/*
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text><Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <MyComponent/>
      </View>
    );
  }
}

onPressLearnMore = function(){
  
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
