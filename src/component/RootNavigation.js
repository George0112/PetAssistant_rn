import { StackNavigator } from 'react-navigation';
import BottomBar from './BottomBar';
import LoginScreen from './LoginScreen';
import BottomNavigation from './BottomNavigation.js';
import TabNavigator from './TabNavigator.js';

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitle: 'Login',
        },
    },
    BottomBar: {
        screen: TabNavigator,
        navigationOpeions: {
            headerTitle: 'BottomNavigation'
        }
    }
});

export default RootNavigator;