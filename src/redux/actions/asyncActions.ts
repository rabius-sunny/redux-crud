import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import TodoRequests from 'services/TodoRequests'
import {
  getSingleTodo,
  getTodos,
  todoCreated,
  todoDeleted,
  todoUpdated
} from './actionCreator'

export const loadTodos = () => {
  return function (dispatch: Dispatch<AnyAction>) {
    TodoRequests.getAllTodos()
      .then(data => {
        dispatch(getTodos(data))
      })
      .catch(err => console.log(err))
  }
}

export const loadSingleTodo = (id: Number) => {
  return function (dispatch: Dispatch<AnyAction>) {
    TodoRequests.getASingleTodo(id)
      .then(info => {
        dispatch(getSingleTodo(info))
      })
      .catch(err => console.log(err))
  }
}

export const createTodo = (data: ITodo) => {
  return function (dispatch: Dispatch<AnyAction>) {
    TodoRequests.createATodo(data)
      .then(info => {
        console.log(info)
        dispatch(todoCreated())
      })
      .catch(err => console.log(err))
  }
}

export const updateTodo = (id: Number, info: ITodo) => {
  return function (dispatch: Dispatch<AnyAction>) {
    TodoRequests.updateATodo(id, info)
      .then(res => {
        console.log(res)
        dispatch(todoUpdated())
      })
      .catch(err => console.log(err))
  }
}

export const deleteTodo = (id: Number) => {
  return function (dispatch: Dispatch<any>) {
    TodoRequests.deleteATodo(id)
      .then(info => {
        console.log(info)
        dispatch(todoDeleted())
        // For fetching the updated list again after deletion
        dispatch(loadTodos())
      })
      .catch(err => console.log(err))
  }
}
