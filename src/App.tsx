import Sidebar from 'components/Sidebar'
import { useEffect } from 'react'
import RoutesContainer from 'utils/RoutesContainer'
import { loadUser } from 'redux/actions/asyncActions'
import { useAppDispatch, useAppSelector } from 'redux/hooks/customReduxHooks'

export default function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  const { todos, loading } = useAppSelector(state => state)
  console.log('loading is', loading)
  console.log('todo is', todos)

  return (
    <RoutesContainer>
      <Sidebar />
    </RoutesContainer>
  )
}
