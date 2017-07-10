import React, {Component} from 'react'
import Spec01 from './Spec01'
import MainScreen from './MainScreen'
import {StackNavigator} from 'react-navigation';


const AppNavigator = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Spec01: {
        screen: Spec01
    }
})


export default class AppWithNavigator extends Component {
    render() {
        return (
            <AppNavigator/>
        )
    }
}

