import {createStore} from 'redux'

const initializeState = {
    num: 0
}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                num: state.num + 1
            };
        case 'del':
            return {
                ...state,
                num: state.num - 1
            };
    }
}

export default () => createStore(reducer)