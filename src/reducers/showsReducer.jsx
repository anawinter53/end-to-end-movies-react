const showsReducer = (state=({shows: [], userInput: ""}), action) => {
    switch(action.type) {
        case 'setInputValue':
            return {...state, userInput: action.payload}
        case 'setSearchString':
            return {}
        case 'setShows':
            return {}
        default: 
            return state;
    }
}

export default showsReducer




// const todosReducer = (state=( {todos: [], userInput: ""} ), action) => {
//     switch (action.type) {
//         case 'getInputText':
//             return  {...state, userInput: action.payload} 

//         case 'getTodoList':
//             return {...state, 
//                 todos: [...state.todos, { text: action.payload, completed: false }], 
//                 userInput: ""};
        
//         case 'deleteTodo':
//             return {...state, todos: state.todos.filter(todo => todo !== action.payload)}
        
//         default:
//             return state;
//     }
// };




// const accountReducer = (state = 0, action) => {
//     switch(action.type) {
//         case "deposit":
//             return state + action.payload;
//         case "withdraw":
//             return state - action.payload;
//         default:
//             return state;
//     }
// }

// export default accountReducer;
