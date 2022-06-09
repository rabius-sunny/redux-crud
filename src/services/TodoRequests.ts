import requests from './http'

class TodoRequests {
  getAllTodos(): Promise<any> {
    return requests.get('/todos')
  }
  getASingleTodo(id: Number): Promise<any> {
    return requests.get(`/todos/${id}`)
  }
  createATodo(body: {}): Promise<any> {
    return requests.post('/todos', body)
  }
  updateATodo(id: Number, body: {}): Promise<any> {
    return requests.put(`/todos/${id}`, body)
  }
  deleteATodo(id: Number): Promise<any> {
    return requests.delete(`/todos/${id}`)
  }
}

export default new TodoRequests()
