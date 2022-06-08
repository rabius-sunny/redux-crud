import { ActionTypes } from './actionTypes'

export const getTodos = (todos: []) => ({
  type: ActionTypes.GET_TODOS,
  payload: todos
})

export const getSingleTodo = (todo: {}) => ({
  type: ActionTypes.GET_SINGLE_TODO,
  payload: todo
})

export const todoCreated = () => ({
  type: ActionTypes.CREATE_TODO
})

export const todoUpdated = () => ({
  type: ActionTypes.UPDATE_TODO
})

export const todoDeleted = () => ({
  type: ActionTypes.DELETE_TODO
})
