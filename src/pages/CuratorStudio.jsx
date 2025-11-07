import { db } from '../lib/storage'
import { useState } from 'react'

function Badge({text}){
  const m = {Active:'var(--success)', Planning:'var(--warning)', Completed:'#9ca3af'}
  return <span className="pill" style={{background:'#f3f4f6', color:'#111827', border:'1px solid var(--border)'}}>{text}</span>
}

export default function CuratorStudio(){
  const [items,setItems]=useState(db.exhibitions())

  const create = ()=>{
    const name = prompt('Exhibition name')
    if(!name) return
    const e = { id:Date.now(), name, artworks:0, visitors:0, duration:'TBD', status:'Planning' }
    const next = [ ...items, e ]
    setItems(next); db.saveExhibitions(next)
  }

  return (
    <div className="container layout" style={{padding:'20px 0'}}>
      <aside className="sidebar card">
        <div className="section-title">Curator Studio</div>
        <div className="muted" style={{fontSize:12}}>Welcome back, {db.currentUser()?.name || 'curator'}</div>
        <div style={{marginTop:10}}><button className="btn small" onClick={create}>+ Create Exhibition</button></div>
      </aside>
      <main style={{flex:1}}>
        <div className="section-title">My Exhibitions</div>
        <div className="grid grid-3" style={{marginTop:10}}>
          {items.map(e => (
            <div key={e.id} className="card" style={{padding:14}}>
              <div className="space-between">
                <div style={{fontWeight:700}}>{e.name}</div>
                <Badge text={e.status}/>
              </div>
              <div className="grid" style={{gridTemplateColumns:'1fr 1fr', marginTop:10}}>
                <div className="muted" style={{fontSize:12}}>Artworks<br/><span style={{color:'#111',fontWeight:600}}>{e.artworks}</span></div>
                <div className="muted" style={{fontSize:12}}>Visitors<br/><span style={{color:'#111',fontWeight:600}}>{e.visitors}</span></div>
              </div>
              <div className="muted" style={{fontSize:12, marginTop:8}}>Duration<br/>{e.duration}</div>
              <div className="row" style={{marginTop:10}}>
                <button className="btn small ghost">🔍 View</button>
                <button className="btn small ghost">✏️ Edit</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
