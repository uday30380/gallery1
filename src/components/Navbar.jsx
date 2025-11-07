import { Link, NavLink, useNavigate } from 'react-router-dom'
import { db } from '../lib/storage'

export default function Navbar(){
  const user = db.currentUser()
  const navigate = useNavigate()
  const logout = ()=>{ db.logout(); navigate('/') }

  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">A</span> ArtGallery
        </Link>
        <div className="nav-links">
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {user? (
            <>
              {user.role==='Artist' && <NavLink to="/artist">Artist Studio</NavLink>}
              {user.role==='Curator' && <NavLink to="/curator">Curator Studio</NavLink>}
              {user.role==='Admin' && <NavLink to="/admin">Admin</NavLink>}
              <button className="btn small ghost" onClick={logout}>Logout</button>
            </>
          ): (
            <>
              <NavLink to="/login"><button className="btn small ghost">Login</button></NavLink>
              <NavLink to="/signup"><button className="btn small">Sign Up</button></NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
