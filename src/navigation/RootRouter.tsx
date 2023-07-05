import {
  createRoutesFromElements,
  Route,
  createBrowserRouter
} from 'react-router-dom'
import ErrorPage from 'pages/ErrorPage'
import Home from 'pages/Home'
import Contact from 'pages/Contact'
const routerElements = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />}  errorElement={<ErrorPage />} />
    <Route path="/Contact" element={<Contact />} />
  </>
)
const router = createBrowserRouter(routerElements)

export default router
