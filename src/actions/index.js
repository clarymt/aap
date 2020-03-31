export const consoleAdd = () => {
    return {
        type: 'CONSOLEADD',
        //piece of data
        payload: console.log("puppies")
    };
};

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };