import { useEffect, useState } from 'react'
import { loadSingleTodo, updateTodo } from 'redux/actions/asyncActions'
import { useAppDispatch, useAppSelector } from 'redux/hooks/customReduxHooks'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
  const [data, setData] = useState({
    title: '',
    completed: false
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(loadSingleTodo(Number(id)))
    }
  }, [id, dispatch])
  const { todo } = useAppSelector(state => state)
  useEffect(() => {
    if (todo) {
      setData({
        title: todo.title,
        completed: Boolean(todo.completed)
      })
    }
  }, [id, dispatch, todo])

  const onChange = (e: any) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let info = {
      title: data.title,
      completed: data.completed
    }
    dispatch(updateTodo(Number(todo.id), info))
    navigate('/')
  }

  return (
    <div className='create'>
      <h1>Update a todo {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form__container'>
          <div>
            <label htmlFor='title'>Title :</label>
            <input
              onChange={e => onChange(e)}
              required
              type='text'
              name='title'
              id='title'
              value={data.title}
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='title'>Status :</label>
            <select
              onChange={e =>
                setData({
                  ...data,
                  completed: e.target.value === '0' ? false : true
                })
              }
              required
              name='completed'
              id='completed'
              value={data.completed ? 1 : 0}
            >
              <option value={0}>Pending</option>
              <option value={1}>Done</option>
            </select>
          </div>
          <div className='mt-2'>
            <input type='submit' value='Update' />
          </div>
        </div>
      </form>
    </div>
  )
}
