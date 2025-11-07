import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../lib/storage'

const ROLES = ['Visitor','Artist','Curator','Admin']

export default function Signup(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('Visitor')
  const navigate = useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    const users = db.users()
    if(users.some(u=>u.email===email)){ alert('Email already exists'); return }
    const newUser = { id:Date.now(), name, email, role, status:'Active' }
    db.saveUsers([...users,newUser])
    db.setCurrentUser(newUser)
    if(role==='Artist') navigate('/artist')
    else if(role==='Curator') navigate('/curator')
    else if(role==='Admin') navigate('/admin')
    else navigate('/gallery')
  }

  return (
    <div className="container" style={{display:'grid',placeItems:'center',height:'70vh'}}>
      <form className="card" onSubmit={submit} style={{width:420,padding:24}}>
        <h3 style={{textAlign:'center'}}>Create Account</h3>
        <p className="muted" style={{textAlign:'center',fontSize:12}}>Join our virtual art community</p>
        <div style={{marginTop:10}}>
          <div className="label">Full Name</div>
          <input className="input" placeholder="Enter your full name" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div style={{marginTop:10}}>
          <div className="label">Email</div>
          <input className="input" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div style={{marginTop:10}}>
          <div className="label">Password</div>
          <input type="password" className="input" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div style={{marginTop:10}}>
          <div className="label">Select Role</div>
          <select value={role} onChange={e=>setRole(e.target.value)}>
            {ROLES.map(r=><option key={r} value={r}>{r}</option>)}
          </select>
          <div className="card" style={{padding:8, marginTop:8}}>
            <div className="muted" style={{fontSize:12}}>Visitor - Browse and purchase art<br/>Artist - Showcase and sell artwork<br/>Curator - Create exhibitions<br/>Admin - Manage platform</div>
          </div>
        </div>
        <button className="btn" style={{marginTop:16,width:'100%'}}>Create Account</button>
        <div className="row" style={{justifyContent:'space-between',marginTop:12}}>
          <span className="muted" style={{fontSize:12}}>Already have an account? <Link to="/login">Sign in</Link></span>
          <Link to="/gallery" className="muted" style={{fontSize:12}}>Back to Gallery</Link>
        </div>
      </form>
    </div>
  )
}
