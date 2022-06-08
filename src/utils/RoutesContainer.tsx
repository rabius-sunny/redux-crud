import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))
const Create = React.lazy(() => import('pages/Create'))
const Update = React.lazy(() => import('pages/Update'))
const Others = React.lazy(() => import('pages/Others'))

export default function RoutesContainer({ children }: any) {
  return (
    <Router>
      <div className='main'>
        <div>{children}</div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/update/:id' element={<Update />} />
              <Route path='/others' element={<Others />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}
