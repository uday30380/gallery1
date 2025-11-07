import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Gallery from './pages/Gallery'
import ArtistStudio from './pages/ArtistStudio'
import CuratorStudio from './pages/CuratorStudio'
import Admin from './pages/Admin'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/artist" element={<ArtistStudio/>}/>
        <Route path="/curator" element={<CuratorStudio/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
