import Sidebar from 'components/Sidebar'
import { useEffect } from 'react'
import RoutesContainer from 'utils/RoutesContainer'

export default function App() {
  return (
    <RoutesContainer>
      <Sidebar />
    </RoutesContainer>
  )
}
