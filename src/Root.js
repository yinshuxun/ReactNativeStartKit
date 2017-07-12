import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import { routerConfig, stackNavigatorConfig } from './navConfig.js'


const AppNavigator = StackNavigator(routerConfig, stackNavigatorConfig)

export default class AppWithNavigator extends Component {
    render() {
        return (
            <AppNavigator />
        )
    }
}

