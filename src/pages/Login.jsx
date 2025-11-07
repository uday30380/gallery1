import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../lib/storage'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    const users = db.users()
    const user = users.find(u=>u.email===email)
    if(!user){ alert('User not found. Try Sign up.'); return }
    db.setCurrentUser(user)
    if(user.role==='Artist') navigate('/artist')
    else if(user.role==='Curator') navigate('/curator')
    else if(user.role==='Admin') navigate('/admin')
    else navigate('/gallery')
  }

  return (
    <div className="container" style={{display:'grid',placeItems:'center',height:'70vh'}}>
      <form className="card" onSubmit={submit} style={{width:380,padding:24}}>
        <h3 style={{textAlign:'center'}}>Welcome Back</h3>
        <p className="muted" style={{textAlign:'center',fontSize:12}}>Sign in to your art gallery account</p>
        <div style={{marginTop:10}}>
          <div className="label">Email</div>
          <input className="input" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div style={{marginTop:12}}>
          <div className="label">Password</div>
          <input className="input" type="password" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn" style={{marginTop:16,width:'100%'}}>Sign In</button>
        <div className="row" style={{justifyContent:'space-between',marginTop:12}}>
          <span className="muted" style={{fontSize:12}}>Don't have an account? <Link to="/signup">Sign up</Link></span>
          <Link to="/gallery" className="muted" style={{fontSize:12}}>Back to Gallery</Link>
        </div>
      </form>
    </div>
  )
}
