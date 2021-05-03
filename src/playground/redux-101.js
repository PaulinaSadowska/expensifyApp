import { createStore } from 'redux';

// action generators 

const increment = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
};

const decrement = ({ decrementBy = 1 } = {}) => {
    return {
        type: "DECREMENT",
        decrementBy
    }
};

const reset = () => {
    return {
        type: "RESET"
    }
};

const set = ({ count = 0 } = {}) => {
    return {
        type: "SET",
        count
    }
};

const countReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            }
        default:
            return state
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment({ incrementBy: 5 }));
store.dispatch(increment());

store.dispatch(reset());

// unsubscribe();
store.dispatch(decrement({ decrementBy: 4 }))

store.dispatch(set({count: 9}))
store.dispatch(set())