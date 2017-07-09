import React, {Component} from 'react'
import {AppRegistry, Text, View, Image} from 'react-native'
import {Provider} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import MainScreen from './MainScreen'
import Spec01 from './spec01'
import storeConfig from './storeConfig'

const store = storeConfig()

const stackNavigator = StackNavigator({
    Main: {screen: MainScreen},
    Spec01: {screen: Spec01},
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Spec01/>
            </Provider>
        )
    }
}


AppRegistry.registerComponent("ReactNativeStartKit", () => App)