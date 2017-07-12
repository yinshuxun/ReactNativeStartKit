import { combineReducers } from 'redux'
import AppNavigator from './AppNavigator'

const initializeHomeState = {
    num: 0
}

const homeReducer = (state = initializeHomeState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                num: state.num + action.step
            };
        case 'del':
            return {
                ...state,
                num: state.num - 1
            };
        default:
            return state;
    }
}

const navReducer = (state, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state
}

export default combineReducers({
    home: homeReducer,
    nav: navReducer
})