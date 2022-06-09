import {
  AiOutlineSecurityScan as Security,
  AiOutlineDashboard as Dashboard,
  AiOutlineProfile as Reminder,
  AiOutlineUsergroupAdd as Employee,
  AiOutlineSetting as Setting
} from 'react-icons/ai'
import { WiDayCloudy as Weather } from 'react-icons/wi'

export const routes: IRoutes[] = [
  { id: 1, name: 'Dashboard', path: '/', icon: Dashboard },
  { id: 2, name: 'Reminder', path: '/reminder', icon: Reminder },
  { id: 3, name: 'Employee', path: '/employee', icon: Employee },
  { id: 4, name: 'Weather', path: '/weather', icon: Weather },
  { id: 5, name: 'Security', path: '/security', icon: Security },
  { id: 6, name: 'Settings', path: '/setting', icon: Setting }
]
