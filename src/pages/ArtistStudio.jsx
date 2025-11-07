import { useState } from 'react'
import { db } from '../lib/storage'

export default function ArtistStudio(){
  const user = db.currentUser() || {name:'artist'}
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [price,setPrice]=useState('')
  const [img,setImg]=useState('')

  const submit=(e)=>{
    e.preventDefault()
    const all = db.artworks()
    const a = { id:Date.now(), title, author:user.name, price:parseFloat(price||'0'), img:img || 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=60' }
    db.saveArtworks([a, ...all])
    alert('Artwork uploaded')
    setTitle(''); setDesc(''); setPrice(''); setImg('')
  }

  return (
    <div className="container layout" style={{padding:'20px 0'}}>
      <aside className="sidebar card">
        <div className="section-title">Artist Studio</div>
        <div className="muted" style={{fontSize:12}}>Welcome back, {user.name}</div>
        <div style={{marginTop:10, display:'grid', gap:8}}>
          <button className="btn small">Upload Artwork</button>
          <button className="btn small ghost">My Listings</button>
          <button className="btn small ghost">$ Sales</button>
        </div>
      </aside>
      <main style={{flex:1}}>
        <div className="card" style={{padding:18}}>
          <div className="section-title">Upload New Artwork</div>
          <form onSubmit={submit} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginTop:8}}>
            <div>
              <div className="label">Artwork Title</div>
              <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter artwork title"/>
            </div>
            <div>
              <div className="label">Price ($)</div>
              <input className="input" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Enter price"/>
            </div>
            <div style={{gridColumn:'1 / -1'}}>
              <div className="label">Description</div>
              <textarea className="input" rows="4" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Describe your artwork..."></textarea>
            </div>
            <div style={{gridColumn:'1 / -1'}}>
              <div className="label">Artwork Image (URL)</div>
              <input className="input" value={img} onChange={e=>setImg(e.target.value)} placeholder="Paste image URL or leave blank"/>
            </div>
            <div style={{gridColumn:'1 / -1'}}>
              <button className="btn">Upload Artwork</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
