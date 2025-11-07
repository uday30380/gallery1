const LS = {
  get(key, def){ try{ const v = localStorage.getItem(key); return v? JSON.parse(v): def }catch(e){ return def } },
  set(key, val){ localStorage.setItem(key, JSON.stringify(val)) },
  remove(key){ localStorage.removeItem(key) }
}

export const db = {
  users: () => LS.get('users', [
    { id:1, name:'Maya Chen', email:'maya@example.com', role:'Artist', status:'Active' },
    { id:2, name:'David Rodriguez', email:'david@example.com', role:'Artist', status:'Active' },
    { id:3, name:'Sarah Kim', email:'sarah@example.com', role:'Curator', status:'Active' },
    { id:4, name:'John Visitor', email:'john@example.com', role:'Visitor', status:'Active' },
  ]),
  saveUsers: (u) => LS.set('users', u),

  artworks: () => LS.get('artworks', [
    { id:1, title:'Abstract Harmony', author:'Maya Chen', price:2500, img:'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=60' },
    { id:2, title:'Contemporary Form', author:'David Rodriguez', price:4800, img:'https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&w=1200&q=60' },
    { id:3, title:'Digital Dreams', author:'Sarah Kim', price:1200, img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60' },
    { id:4, title:'Urban Landscape', author:'Alex Thompson', price:1800, img:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60' }
  ]),
  saveArtworks: (a) => LS.set('artworks', a),

  exhibitions: () => LS.get('exhibitions', [
    { id:1, name:'Modern Expressions', artworks:15, visitors:342, duration:'1/15/2024 - 3/15/2024', status:'Active' },
    { id:2, name:'Digital Frontier', artworks:8, visitors:0, duration:'2/1/2024 - 4/1/2024', status:'Planning' },
    { id:3, name:'Contemporary Voices', artworks:22, visitors:1203, duration:'10/1/2023 - 12/3/2023', status:'Completed' }
  ]),
  saveExhibitions: (e) => LS.set('exhibitions', e),

  currentUser: () => LS.get('currentUser', null),
  setCurrentUser: (u) => LS.set('currentUser', u),
  logout: () => LS.remove('currentUser'),

  wishlist: () => LS.get('wishlist', []),
  saveWishlist: (w) => LS.set('wishlist', w),
  cart: () => LS.get('cart', []),
  saveCart: (c) => LS.set('cart', c),
}
