import {ADD_TODO, RESET_TODO, TOGGLE_TODO} from "../actionTypes"
import {nanoid} from 'nanoid'

const initialState = {
    todoList: [],
};

const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoList: [...state.todoList, {
                    id: nanoid(6),
                    content: action.payload,
                    status: 0
                }],
            };
        }
        case TOGGLE_TODO: {
            return {
                ...state,
                todoList: state.todoList
                    .map(item => (item.id === action.payload.id)
                        ?
                        {
                            ...item,
                            status: item.status = 1 - item.status
                        }
                        : item
                    ),
            };
        }
        case RESET_TODO: {
            return state = {
                todoList: []
            }
        }
        default:
            return state;
    }
}

export default todoReducer
