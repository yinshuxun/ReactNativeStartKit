import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
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

export default (initialState) => {
    const store = createStore(rootReducer, initialState, middle);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(() => {
            store.replaceReducer(require('./reducer'));
        });
    }

    return store;
};