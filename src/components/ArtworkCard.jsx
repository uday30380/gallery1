import { db } from '../lib/storage'

export default function ArtworkCard({art}){
  const wishlist = db.wishlist()
  const cart = db.cart()

  const addWish = ()=>{
    const w = [...wishlist, art.id]
    db.saveWishlist([...new Set(w)])
    alert('Added to wishlist')
  }
  const addCart = ()=>{
    const c = [...cart, art.id]
    db.saveCart(c)
    alert('Added to cart')
  }

  return (
    <div className="card" style={{overflow:'hidden'}}>
      <img src={art.img} alt={art.title} style={{width:'100%',height:220,objectFit:'cover'}}/>
      <div style={{padding:14}}>
        <div className="section-title">{art.title}</div>
        <div className="muted" style={{fontSize:13}}>by {art.author}</div>
        <div className="space-between" style={{marginTop:10}}>
          <div style={{fontWeight:700}}>${art.price.toLocaleString()}</div>
          <div className="row">
            <button className="btn small ghost" onClick={addWish}>♡</button>
            <button className="btn small" onClick={addCart}>🛒</button>
          </div>
        </div>
        <div style={{marginTop:10}}>
          <button className="btn small ghost">View Details</button>
        </div>
      </div>
    </div>
  )
}
