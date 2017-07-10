const initializeState = {
    num: 0
}

const reducer = (state = initializeState, action) => {
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

export default reducer