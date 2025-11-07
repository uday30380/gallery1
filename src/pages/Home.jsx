import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <h1>Discover Digital Art</h1>
        <p className="muted">Experience world-class artworks from emerging and established artists in our virtual gallery</p>
        <div className="row" style={{justifyContent:'center',marginTop:16}}>
          <Link to="/signup"><button className="btn">Start Your Journey</button></Link>
          <Link to="/gallery"><button className="btn secondary">Explore Gallery</button></Link>
        </div>
        <div className="muted" style={{marginTop:10,fontSize:12}}>Learn more about VirtuArt</div>
      </section>

      <section style={{padding:'10px 0 60px'}}>
        <h3 style={{textAlign:'center'}}>Featured Artworks</h3>
        <p className="muted" style={{textAlign:'center',fontSize:13}}>Discover exceptional pieces curated by our team of art experts</p>
        <Featured/>
      </section>
    </div>
  )
}

import { db } from '../lib/storage'
import ArtworkCard from '../components/ArtworkCard'
function Featured(){
  const list = db.artworks().slice(0,3)
  return <div className="grid grid-3" style={{marginTop:20}}>{list.map(a=><ArtworkCard key={a.id} art={a}/>)}</div>
}
