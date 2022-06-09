import Navbar from 'components/Navbar'
import Employee from 'pages/Employee'
import Forbidden from 'pages/Forbidden'
import NotFound from 'pages/NotFound'
import Reminder from 'pages/Reminder'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Home = React.lazy(() => import('pages/Home'))
const Create = React.lazy(() => import('pages/Create'))
const Update = React.lazy(() => import('pages/Update'))

export default function RoutesContainer({ children }: any) {
  return (
    <Router>
      <div className='main'>
        <div className='sidebar'>{children}</div>
        <div className='content'>
          <Navbar />
          <div className='content__main'>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/update/:id' element={<Update />} />
                <Route
                  path='/reminder'
                  element={
                    <PrivateRoute>
                      <Reminder />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/employee'
                  element={
                    <PrivateRoute>
                      <Employee />
                    </PrivateRoute>
                  }
                />
                <Route path='/forbidden' element={<Forbidden />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  )
}
