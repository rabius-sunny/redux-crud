import { routes } from 'assets/fakeData'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <div className='sidebar__main'>
      <h1>RC</h1>
      <div className='sidebar__main__routes'>
        {routes.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className='route'
              style={{
                backgroundColor:
                  pathname === item.path ? '#7d48b1' : 'transparent'
              }}
            >
              <item.icon className='icons' />
              <h4>{item.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
