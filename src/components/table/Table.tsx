import { useState } from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

const Table = ({ todos }: any) => {
  const [tableData, setTableData] = useState(todos)
  const [search, setSearch] = useState('')

  const columns = [
    { label: '#', accessor: 'id', sortable: true },
    { label: 'Title', accessor: 'title', sortable: true },
    { label: 'Status', accessor: 'completed', sortable: true },
    { label: 'Actions', accessor: 'completed', sortable: false }
  ]

  const handleSorting = (sortField: any, sortOrder: any) => {
    if (sortField) {
      const sorted = [...tableData].sort((a: any, b: any) => {
        if (a[sortField] === null) return 1
        if (b[sortField] === null) return -1
        if (a[sortField] === null && b[sortField] === null) return 0
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true
          }) * (sortOrder === 'asc' ? 1 : -1)
        )
      })
      setTableData(sorted)
    }
  }
  let filteredData = tableData.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='table__container mt-2'>
      <div className='options'>
        <div>
          <label htmlFor='search'>Search</label>
          <input
            onChange={e => setSearch(e.target.value)}
            type='text'
            id='search'
            placeholder='search here'
          />
        </div>
        <div>
          <h4>Filter</h4>
        </div>
      </div>
      <table className='table'>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, filteredData }} />
      </table>
    </div>
  )
}

export default Table
