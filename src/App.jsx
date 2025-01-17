import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Login from './pages/Login'
    import Dashboard from './pages/Dashboard'
    import NewProject from './pages/NewProject'
    import ViewProject from './pages/ViewProject'
    import EditProject from './pages/EditProject'

    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/project/:id" element={<ViewProject />} />
            <Route path="/edit-project/:id" element={<EditProject />} />
          </Routes>
        </BrowserRouter>
      )
    }
