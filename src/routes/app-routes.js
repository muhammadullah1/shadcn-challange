// --------- Admin import
import Dashboard from '../app/dashboard'
import Page from '../app/page'

export const AppRoutes = [
  {
    path: '/dashboard',
    element: Dashboard,
  },
  {
    path: '/',
    element: Page,
  },
]

// export const AdminRoutes = [
//   {
//     path: '/admin/dashboard',
//     element: AdminDashboard,
//   },
//   {
//     path: '/admin/managedeposit',
//     element: AdminMangeDeposit,
//   },
// ]