import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            
            state.push(
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            )
        },
        completeTodo: (state, action) => {
            let findTodo = state.find((todo) => todo.id === action.payload)
            if(findTodo) {
                findTodo.completed = !findTodo.completed
            }
        }
    }
})

export const {addTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer;