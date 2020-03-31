const consoleReducer = (state, action) => {
    switch (action.type) {
        case 'CONSOLEADD':
            return state + action.payload;
        // case 'DECREMENT':
        //     return state - 1
        default:
            return state;
    }
}

export default consoleReducer;