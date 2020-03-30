const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return console.log();
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}

export default counterReducer;