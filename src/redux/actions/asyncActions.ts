import axios from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import {
  getSingleTodo,
  getTodos,
  todoCreated,
  todoDeleted,
  todoUpdated
} from './actionCreator'

export const loadUser = () => {
  return function (dispatch: Dispatch<AnyAction>) {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/todos`)
      .then(data => {
        console.log(data)
        dispatch(getTodos(data.data))
      })
      .catch(err => console.log(err))
  }
}

export const loadSingleUser = (id: Number) => {
  return function (dispatch: Dispatch<AnyAction>) {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/todos/${id}`)
      .then(info => {
        console.log(info)
        dispatch(getSingleTodo(info.data))
      })
      .catch(err => console.log(err))
  }
}

export const createUser = (data: ITodo) => {
  return function (dispatch: Dispatch<AnyAction>) {
    axios
      .post(`${process.env.REACT_APP_API_SERVER}/todos`, data)
      .then(info => {
        console.log(info)
        dispatch(todoCreated())
      })
      .catch(err => console.log(err))
  }
}

export const updateUser = (id: Number, info: ITodo) => {
  return function (dispatch: Dispatch<AnyAction>) {
    axios
      .put(`${process.env.REACT_APP_API_SERVER}/todos/${id}`, info)
      .then(res => {
        console.log(res)
        dispatch(todoUpdated())
      })
      .catch(err => console.log(err))
  }
}

export const deleteUser = (id: Number) => {
  return function (dispatch: Dispatch<any>) {
    axios
      .delete(`${process.env.REACT_APP_API_SERVER}/todos/${id}`)
      .then(info => {
        console.log(info)
        dispatch(todoDeleted())
        // For fetching the updated list again after deletion
        dispatch(loadUser())
      })
      .catch(err => console.log(err))
  }
}
