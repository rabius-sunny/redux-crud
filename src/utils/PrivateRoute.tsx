import { Navigate } from 'react-router-dom'

// change here to check the restricted routes
const auth = false

export default function PrivateRoute({ children }: any) {
  return auth ? children : <Navigate to='/forbidden' />
}
