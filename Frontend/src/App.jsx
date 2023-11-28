import NotFound from "./pages/404NotFound"
import Contact from "./pages/Contact"
import Details from "./pages/Details"
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProfilePage from './pages/Profile'
import Cart from "./pages/Cart"
import Dashboard from "./pages/Dashboard"
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App
