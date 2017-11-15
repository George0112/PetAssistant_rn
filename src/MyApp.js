import React from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import { AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MdIconPack from 'react-icons/lib/md'
 
class MoviesAndTV extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Movies & TV',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }
 
  render() { tabBarIcon }
}
 
class Music extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Music',
    tabBarIcon: () => (<MdIconPack size={24} color="white" name="MdAcUnit" />)
  }
 
  render() { tabBarIcon }
}
 
class Newsstand extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Newsstand',
    tabBarIcon: () => (<Icon size={24} color="white" name="Newsstand" />)
  }
 
  render() { tabBarIcon }
}
 
const MyApp = TabNavigator({
  MoviesAndTV: { screen: MoviesAndTV },
  Music: { screen: Music },
  Newsstand: { screen: Newsstand }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        MoviesAndTV: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Newsstand: {
          barBackgroundColor: '#EEEEEE',
          labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
          activeLabelColor: '#212121',
          activeIcon: <Icon size={24} color="#212121" name="newsstand" />
        }
      }
    }
  }
})
 
AppRegistry.registerComponent('MyApp', () => MyApp)