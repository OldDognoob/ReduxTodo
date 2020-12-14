// create initial state and populate with the todo
const initialState = {
    todos:[],
};
// create a function called reducer , that takes two arguments
// the initialState and the action
const reducer = (state = initialState, action)=>{
    //a switch statement switching on action type
    switch(action.type){
        // adding the add todo case
        case 'ADD_TODO':
            // the current state 
            return {
                ...state,
                // the current todo with the new todo
                todos:[...state.todos, action.payload],
            };
            case 'DELETE_TODO':
                return{
                    ...state,
                    // filtered the current todos and remove th todo item by id
                    todos:state.todos.filter(todo=>todo.id !== action.payload)
                };
            // a default state that returns the state
        default:
            return state;
    }
}
// export the reducer
export default reducer;