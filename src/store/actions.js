import {ADD_TODO, SESSION, SESSION_RESET, RESET_TODO, TOGGLE_TODO} from './actionTypes'

export const session = userDetails => ({
    type: SESSION,
    payload: {
        userDetails
    }
})

export const sessionReset = () => ({
    type: SESSION_RESET
})

export const addTodo = content => ({
    type: ADD_TODO,
    payload: content
})

export const resetTodo = () => ({
    type: RESET_TODO
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})
