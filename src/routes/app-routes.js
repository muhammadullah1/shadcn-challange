// --------- Admin import
import Dashboard from '../app/dashboard/analaytics'
import Page from '../app/dashboard/page'

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
