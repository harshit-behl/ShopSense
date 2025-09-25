# 📱 Electronics Price Comparison - Cashify Style

A modern, responsive frontend application for comparing electronics prices between Flipkart and Amazon, built with React, Vite, and TailwindCSS.

## ✨ Features

### 🏠 Landing Page
- Clean, modern gradient background (blue + green theme)
- Central search bar with animated suggestions
- Category icons for quick navigation
- Responsive design for desktop and mobile

### 🔍 Search & Results
- Two-column layout: Flipkart vs Amazon
- Real-time search with autocomplete suggestions
- Product cards with:
  - Product images and names
  - Price comparison with discount percentages
  - Key specifications (RAM, Storage, Camera, Battery)
  - Ratings and reviews
  - Fast delivery indicators
  - "Best Deal" badges for lowest prices

### ⚖️ Comparison View
- Side-by-side product comparison
- Price difference calculations
- Detailed specifications table
- Direct purchase links

### 🎛️ Filters & Sorting
- Price range slider (₹10K - ₹200K)
- Sort by: Price (Low to High/High to Low), Rating, Fast Delivery
- Brand filters (Apple, Samsung, OnePlus, Dell, etc.)

### 🎨 UI Enhancements
- Hover animations with Framer Motion
- Skeleton loading states
- Smooth transitions and micro-interactions
- Custom scrollbars and sliders
- Responsive grid layouts
- Emoji integration for visual appeal

## 🛠️ Tech Stack

- **Framework**: React 19+ with Vite
- **Styling**: TailwindCSS with custom utilities
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **State Management**: React Context/Hooks
- **Icons**: Emojis and Unicode symbols

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:5173`

## 💡 Usage

1. **Search Products**: Use the search bar on the home page
2. **Browse Results**: View products from both Flipkart and Amazon
3. **Apply Filters**: Use price range, sorting, and brand filters
4. **Compare Prices**: Click "Compare Prices" on any product
5. **View Deals**: Click platform-specific buttons to visit stores

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx         # Search with autocomplete
│   ├── ProductCard.jsx       # Individual product display
│   ├── CompareCard.jsx       # Side-by-side comparison
│   ├── Filters.jsx          # Price, brand, and sort filters
│   └── SkeletonLoader.jsx    # Loading placeholder
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── Results.jsx          # Search results view
│   └── Compare.jsx          # Product comparison page
├── utils/
│   ├── formatPrice.js       # Price formatting utilities
│   └── dummyData.js        # Mock product data
├── styles.css               # TailwindCSS with custom styles
├── App.jsx                  # Main app with routing
└── main.jsx                # App entry point
```

## 🎯 Key Features Implemented

- ✅ Modern Cashify-style UI design
- ✅ Gradient backgrounds and animations
- ✅ Two-column comparison layout
- ✅ Price comparison with best deal highlighting
- ✅ Advanced filtering and sorting
- ✅ Responsive design (desktop + mobile)
- ✅ Smooth hover animations
- ✅ Loading states with skeletons
- ✅ Search with autocomplete
- ✅ Product specifications display
- ✅ Rating and review integration

## 🔮 Future Enhancements

- [ ] Real API integration (Web scraping or APIs)
- [ ] User authentication and wishlists
- [ ] Price history charts with Recharts
- [ ] Push notifications for price drops
- [ ] Advanced search filters (category, features)
- [ ] Dark mode support
- [ ] PWA functionality

**Built with ❤️ using React, Vite, and TailwindCSS**
