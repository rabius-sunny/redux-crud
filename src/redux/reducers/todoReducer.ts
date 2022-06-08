import { ActionTypes } from '../actions/actionTypes'

const initialState = {
  todos: [],
  todo: {},
  loading: true
}

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      }

    case ActionTypes.GET_SINGLE_TODO:
      return {
        ...state,
        todo: action.payload,
        loading: false
      }

    case ActionTypes.DELETE_TODO:
    case ActionTypes.CREATE_TODO:
    case ActionTypes.UPDATE_TODO:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default todoReducer
