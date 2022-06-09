import { useNavigate } from 'react-router-dom'
import { deleteTodo } from 'redux/actions/asyncActions'
import { useAppDispatch } from 'redux/hooks/customReduxHooks'

const TableBody = ({ searchedData }: any) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleDelete = (id: Number) => {
    if (window.confirm('Are you sure to delete the todo?')) {
      dispatch(deleteTodo(id))
    }
  }

  return (
    <tbody>
      {searchedData.map((data: any) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td className={data.completed ? 'done' : ''}>{data.title}</td>
            <td className={data.completed ? 'done' : ''}>
              {data.completed ? 'done' : 'pending'}
            </td>
            <td>
              <button onClick={() => navigate(`/update/${data.id}`)}>
                Edit
              </button>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
