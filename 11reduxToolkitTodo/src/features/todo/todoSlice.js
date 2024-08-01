import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const todosList = window.localStorage.getItem('todos');
    if (todosList) {
        const todoListArr = JSON.parse(todosList);
        return todoListArr
    } else {
        return []
    }
}

const todos = getInitialTodo()

const initialState = {
    todos: todos
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            const todosList = window.localStorage.getItem('todos');
            if (todosList) {
                const todoListArr = JSON.parse(todosList);
                todoListArr.push({...todo});
                window.localStorage.setItem('todos', JSON.stringify(todoListArr));
            } else {
                window.localStorage.setItem('todos',JSON.stringify([{...todo}]));
            }
        },
        removeTodo: (state, action) => {
            // state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            const todosList = window.localStorage.getItem('todos');
            if (todosList) {
                const todoListArr = JSON.parse(todosList);
                todoListArr.map((todo, index) => todo.id === action.payload && todoListArr.splice(index, 1))
                window.localStorage.setItem('todos', JSON.stringify(todoListArr));
                state.todos = todoListArr;
            }
        },
        updateTodo: (state, action) => {
            // const todoList = state.todos
            // todoList.map((todo) => todo.id === action.payload.id && (todo.text = action.payload.text))
            const todosList = window.localStorage.getItem('todos');
            if (todosList) {
                const todoListArr = JSON.parse(todosList);
                todoListArr.map((todo) => todo.id === action.payload.id && (todo.text = action.payload.text))
                window.localStorage.setItem('todos', JSON.stringify(todoListArr));
                state.todos = todoListArr;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} =  todoSlice.actions

export default todoSlice.reducer