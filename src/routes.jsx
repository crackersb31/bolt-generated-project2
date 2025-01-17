import { createBrowserRouter } from 'react-router-dom'
    import App from './App'
    import Login from './pages/Login'
    import Dashboard from './pages/Dashboard'
    import NewProject from './pages/NewProject'
    import ViewProject from './pages/ViewProject'
    import EditProject from './pages/EditProject'

    export const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          { index: true, element: <Login /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'new-project', element: <NewProject /> },
          { path: 'project/:id', element: <ViewProject /> },
          { path: 'edit-project/:id', element: <EditProject /> }
        ]
      }
    ])
