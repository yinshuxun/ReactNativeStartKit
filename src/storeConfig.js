import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
const middlewares = [thunkMiddleware]
let middle

if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    middle = compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
    middle = applyMiddleware(...middlewares);
}

export default (initialState) => createStore(reducer, initialState, middle);