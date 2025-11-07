# ArtGallery (React + Vite)

A small, fully working mock of the art gallery app shown in your screenshots, including:
- Landing page with hero + featured artworks
- Login and Signup with roles (Visitor, Artist, Curator, Admin)
- Visitor Gallery with search, tags, metrics, wishlist/cart buttons
- Artist Studio with artwork upload (stores to localStorage)
- Curator Studio with exhibitions list and create button
- Admin Dashboard with user metrics and table

## Run locally

```bash
npm install
npm run dev
```

App opens on http://localhost:5173

## Notes
- Data persists in `localStorage` so you can refresh and keep uploads/exhibitions.
- Real authentication and backend are out of scope; this is a front-end working prototype.
- You can change sample images and texts in `src/lib/storage.js`.
"# gallery1" 
