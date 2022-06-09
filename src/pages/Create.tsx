import { useState } from 'react'
import { createTodo } from 'redux/actions/asyncActions'
import { useAppDispatch } from 'redux/hooks/customReduxHooks'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const [data, setData] = useState<ISubmitData>({
    title: '',
    completed: 0
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onChange = (e: any) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let info = {
      id: Math.floor(Math.random() * 100),
      title: data.title,
      completed: Number(data.completed) === 0 ? false : true
    }
    dispatch(createTodo(info))
    navigate('/')
  }

  return (
    <div className='create'>
      <h1>Create a todo</h1>
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
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='title'>Status :</label>
            <select
              onChange={e => onChange(e)}
              required
              name='completed'
              id='completed'
            >
              <option value={0}>Pending</option>
              <option value={1}>Done</option>
            </select>
          </div>
          <div className='mt-2'>
            <input type='submit' value='Create' />
          </div>
        </div>
      </form>
    </div>
  )
}
