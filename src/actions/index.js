export const increment = (props) => {
    return {
        type: 'INCREMENT',
        //piece of data
        payload: console.log({'partNo':props.testStore.map.number, 'price':props.testStore.map.price})
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};