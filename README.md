# 🛍️ Product Listing App

A responsive product listing page built with React.js and Next.js.

## 🛠️ Tech Stack
- React.js
- Next.js (Pages Router)
- Bootstrap v5
- Fetch API

## ✨ Features
- Server Side Rendering (SSR) using `getServerSideProps`
- Fetches products from [FakeStore API](https://fakestoreapi.com/products)
- Responsive product grid using Bootstrap
- Search bar to filter products by title (client-side)
- Loading spinner during filtering
- Product detail page with dynamic routing (`/product/[id]`)


5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📌 Assumptions Made
- Used Pages Router instead of App Router for simpler SSR setup
- Bootstrap imported globally via `_app.js`
- Search filtering is done client-side with 300ms debounce
- Product detail page fetches individual product data using SSR

## 📁 Project Structure
```
├── components/
│   └── ProductCard.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── product/
│       └── [id].js
├── public/
└── README.md
```
## 📸 Screenshots

### Product Listing Page
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/f824bc81-d0df-41e5-9a80-be70e29a7b9c" />


### Search Filtering
<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/46829795-e18a-44f2-a1c5-abe5133e9a62" />


### Product Detail Page
<img width="1919" height="852" alt="image" src="https://github.com/user-attachments/assets/b11d1023-b60a-47ac-91ce-760384ecba48" />

