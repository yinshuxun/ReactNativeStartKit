import React, {Component} from 'react'
import Spec01 from './views/Spec01'
import FlatListView from './views/FlatListView'
import MainScreen from './MainScreen'
import {StackNavigator} from 'react-navigation';


const AppNavigator = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Spec01: {
        screen: Spec01
    },
    Flat: {
        screen: FlatListView
    }
})

export default class AppWithNavigator extends Component {
    render() {
        return (
            <AppNavigator/>
        )
    }
}

