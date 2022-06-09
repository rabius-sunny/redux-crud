const TableBody = ({ filteredData }: any) => {
  console.log('tabledata', filteredData)
  return (
    <tbody>
      {filteredData.map((data: any) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td className={data.completed ? 'done' : ''}>{data.title}</td>
            <td className={data.completed ? 'done' : ''}>
              {data.completed ? 'done' : 'pending'}
            </td>
            <td>
              <button onClick={() => console.log('data', data)}>Edit</button>
              <button onClick={() => console.log('data', data)}>Delete</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
