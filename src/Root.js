import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator.js'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

class AppWithNavigator extends Component {
    render() {
        var { dispatch, nav } = this.props
        return (
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        )
    }
}

export default connect(({ nav }) => ({
    nav
}), dispatch => ({ dispatch }))(AppWithNavigator)
