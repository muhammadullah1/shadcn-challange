import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './app-routes'
// import Error404 from '../Pages/Errors/Error404.jsx'
// import { Spin } from 'antd'
// import { useSelector } from 'react-redux'

// const ParentRoute = {
//   superadmin: {
//     routes: AdminRoutes,
//     loginUrl: '/admin/login',
//   },
//   client: {
//     routes: ClientRoutes,
//     loginUrl: 'login',
//   },
// }

const index = () => {
  //   const { user, isAuthenticate } = useSelector((state) => state.auth)
  const generateRandomKey = () => Math.floor(Math.random() * 90 + 10)
  const cachePaths = useMemo(() => {
    const appRoutesCached = AppRoutes?.map((el) => (
      <Route path={el.path} element={<el.element />} key={el.path} />
    ))
    // let authRoutesCached = []
    // if (isAuthenticate) {
    //   authRoutesCached = ParentRoute[user.role].routes.map((el) => (
    //     <Route path={el.path} key={el.path} element={<el.element />} />
    //   ))
    // }
    return [
      //   <Route path='*' element={<Error404 />} />,
      ...appRoutesCached,
      //   ...authRoutesCached,
    ]
  }, [])
  //   }, [isAuthenticate, user])

  return (
    <Suspense
      fallback={'Loading...'}
      // <Spin
      //   size='large'
      //   style={{
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     height: '100vh',
      //   }}
      // />
      //   }
    >
      <Routes key={generateRandomKey()}>{cachePaths}</Routes>

    </Suspense>
  )
}

export default index
