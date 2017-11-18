import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import FoodScreen from './FoodScreen';

export default RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen, 
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
            ),
        },
    },
    Food: {
        screen: FoodScreen,
        navigationOpeions: {
            tabBarLabel: 'Food',
            tabBarIcon: ({tintColor, focusd}) => (
                <Iconicons
                    name={focused ? 'person' : 'person-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    }
});