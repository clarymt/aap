export const consoleAdd = () => {
    return {
        type: 'CONSOLEADD',
        //piece of data
        payload: console.log()
    };
};

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };