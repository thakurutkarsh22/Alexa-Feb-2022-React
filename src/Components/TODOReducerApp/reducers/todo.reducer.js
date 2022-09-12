function reducer(state, action) {

    switch(action.type) {
        case "ADD":  {
            const latestCounter = state.count + 1;
            const todoObj = {
                id: latestCounter,
                text: action.value,
            }
            return {
                ...state,
                count: latestCounter,
                todos: [...state.todos, todoObj]

            }
        }

        case "DELETE": {
            
            return {

            }
        }

        default: 
            return state;

    }
}

const initialState= {
    todos: [],
    count: 0,
}

export {reducer, initialState};