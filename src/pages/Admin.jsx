import { db } from '../lib/storage'
import { useState } from 'react'

export default function Admin(){
  const [users,setUsers]=useState(db.users())

  const remove=(id)=>{
    const next = users.filter(u=>u.id!==id)
    setUsers(next); db.saveUsers(next)
  }

  return (
    <div className="container layout" style={{padding:'20px 0'}}>
      <aside className="sidebar card">
        <div className="section-title">Admin Dashboard</div>
        <div className="muted" style={{fontSize:12}}>Manage users and gallery</div>
      </aside>
      <main style={{flex:1}}>
        <div className="grid" style={{gridTemplateColumns:'repeat(4, 1fr)', gap:12}}>
          <div className="stat">{users.length}<div className="muted" style={{fontSize:12}}>Total Users</div></div>
          <div className="stat">{users.filter(u=>u.role==='Artist').length}<div className="muted" style={{fontSize:12}}>Active Artists</div></div>
          <div className="stat">{users.filter(u=>u.role==='Curator').length}<div className="muted" style={{fontSize:12}}>Curators</div></div>
          <div className="stat">{15}<div className="muted" style={{fontSize:12}}>New This Week</div></div>
        </div>

        <div className="card" style={{padding:12, marginTop:14}}>
          <div className="section-title">Recent Users</div>
          <table className="table">
            <thead>
              <tr><th>Name</th><th>Role</th><th>Status</th><th style={{textAlign:'right'}}>Actions</th></tr>
            </thead>
            <tbody>
              {users.map(u=>(
                <tr key={u.id}>
                  <td>{u.name}<div className="muted" style={{fontSize:12}}>{u.email}</div></td>
                  <td>{u.role}</td>
                  <td><span className="pill">{u.status}</span></td>
                  <td style={{textAlign:'right'}}>
                    <button className="btn small ghost" onClick={()=>alert(JSON.stringify(u,null,2))}>👁</button>{' '}
                    <button className="btn small ghost" onClick={()=>alert('Edit not implemented')}>✏️</button>{' '}
                    <button className="btn small ghost" onClick={()=>remove(u.id)}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
