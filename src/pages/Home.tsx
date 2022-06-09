import { useEffect } from 'react'
import { loadTodos } from 'redux/actions/asyncActions'
import { useAppDispatch, useAppSelector } from 'redux/hooks/customReduxHooks'
import Table from 'components/table/Table'
import { IoCreateOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import CSkeleton from 'components/CSkeleton'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch])
  const { todos, loading } = useAppSelector(state => state)
  const navigate = useNavigate()
  return (
    <>
      <div className='home__header'>
        <h1>Todos Table</h1>
        <button onClick={() => navigate('/create')}>
          <IoCreateOutline className='icon' />
        </button>
      </div>
      {loading || !todos ? <CSkeleton /> : <Table todos={todos.slice(0, 10)} />}
    </>
  )
}
