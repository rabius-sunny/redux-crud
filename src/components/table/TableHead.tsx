import { useState } from 'react'

const TableHead = ({ columns, handleSorting }: any) => {
  const [sortField, setSortField] = useState('')
  const [order, setOrder] = useState('asc')

  const handleSortingChange = (accessor: any) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
  }

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }: any) => {
          let cl = sortable
            ? sortField && sortField === accessor && order === 'asc'
              ? 'up'
              : sortField && sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : ''
          return (
            <th
              key={accessor}
              onClick={
                sortable
                  ? () => handleSortingChange(accessor)
                  : () => console.log('null')
              }
              className={cl}
            >
              {label}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHead
