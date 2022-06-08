import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import todoReducer from '../reducers/todoReducer'

const middleWares = [reduxThunk]

const store = createStore(todoReducer, applyMiddleware(...middleWares))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
