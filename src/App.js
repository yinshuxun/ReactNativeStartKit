import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import AppWithNavigator from './Root'
import storeConfig from './storeConfig'
import Spec01 from './views/Spec01'

const store = storeConfig()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent("ReactNativeStartKit", () => App)

