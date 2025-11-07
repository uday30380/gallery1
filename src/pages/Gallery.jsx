import { useMemo, useState } from 'react'
import { db } from '../lib/storage'
import ArtworkCard from '../components/ArtworkCard'

export default function Gallery(){
  const [q,setQ]=useState('')
  const [filter,setFilter]=useState('All')
  const [viewCount,setViewCount]=useState(4)
  const artworks = db.artworks()

  const filtered = useMemo(()=>{
    return artworks.filter(a => (filter==='All' || a.category===filter) && 
      (a.title.toLowerCase().includes(q.toLowerCase()) || a.author.toLowerCase().includes(q.toLowerCase())))
  },[artworks,q,filter])

  const metrics = {
    viewed: 156, favorites: db.wishlist().length || 23, tours: 7
  }

  return (
    <div className="container" style={{padding:'26px 0 50px'}}>
      <div className="space-between">
        <div>
          <div style={{fontSize:20,fontWeight:700}}>Art Gallery</div>
          <div className="muted" style={{fontSize:12}}>Welcome, {db.currentUser()?.name || 'Guest'}. Discover amazing artworks</div>
        </div>
        <div className="row">
          <button className="btn small ghost">Wishlist ({metrics.favorites})</button>
          <button className="btn small ghost">Cart (2)</button>
          <button className="btn small ghost">Logout</button>
        </div>
      </div>

      <div className="grid" style={{gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginTop:16}}>
        <div className="stat">{metrics.viewed} <div className="muted" style={{fontSize:12,fontWeight:500}}>Artworks Viewed</div></div>
        <div className="stat">{metrics.favorites} <div className="muted" style={{fontSize:12,fontWeight:500}}>Favorites</div></div>
        <div className="stat">{metrics.tours} <div className="muted" style={{fontSize:12,fontWeight:500}}>Tours Completed</div></div>
      </div>

      <div style={{marginTop:18}}>
        <div className="space-between">
          <div className="row" style={{gap:10}}>
            <input className="input" placeholder="Search artworks or artists..." style={{width:320}} value={q} onChange={e=>setQ(e.target.value)}/>
            <button className="btn small ghost">Filters</button>
            <button className="btn small ghost">View</button>
          </div>
          <button className="btn small ghost" onClick={()=>setFilter('All')}>Reset</button>
        </div>
      </div>

      <div style={{marginTop:14}}>
        <div className="row tags">
          {['All','Paintings','Sculptures','Digital','Photography'].map(tag => (
            <button key={tag} className="tag" onClick={()=>setFilter(tag)}>{tag}</button>
          ))}
        </div>
      </div>

      <h4 style={{marginTop:18}}>Featured Artworks</h4>
      <div className="grid grid-3" style={{marginTop:10}}>
        {filtered.slice(0,viewCount).map(a=>(<ArtworkCard key={a.id} art={a}/>))}
      </div>

      <div style={{display:'grid',placeItems:'center',marginTop:16}}>
        {viewCount < filtered.length && <button className="btn ghost" onClick={()=>setViewCount(viewCount+4)}>Load More Artworks</button>}
      </div>
    </div>
  )
}
