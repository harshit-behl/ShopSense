export const dummyProducts = [
  // Flipkart Products
  {
    id: 'fl_1',
    name: 'iPhone 15 Pro Max',
    price: 134999,
    originalPrice: 159900,
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    platform: 'flipkart',
    category: 'mobile',
    specs: {
      ram: '8GB',
      storage: '256GB',
      camera: '48MP',
      battery: '4422mAh',
      display: '6.7"'
    },
    rating: 4.6,
    reviews: 15420,
    fastDelivery: true,
    brand: 'Apple'
  },
  {
    id: 'fl_2',
    name: 'MacBook Air M3',
    price: 114900,
    originalPrice: 134900,
    image: 'https://via.placeholder.com/300x300?text=MacBook+Air+M3',
    platform: 'flipkart',
    category: 'laptop',
    specs: {
      ram: '8GB',
      storage: '256GB SSD',
      processor: 'Apple M3',
      battery: '18 hours',
      display: '13.6"'
    },
    rating: 4.7,
    reviews: 8930,
    fastDelivery: true,
    brand: 'Apple'
  },
  {
    id: 'fl_3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    originalPrice: 144999,
    image: 'https://via.placeholder.com/300x300?text=Galaxy+S24+Ultra',
    platform: 'flipkart',
    category: 'mobile',
    specs: {
      ram: '12GB',
      storage: '256GB',
      camera: '200MP',
      battery: '5000mAh',
      display: '6.8"'
    },
    rating: 4.5,
    reviews: 12340,
    fastDelivery: true,
    brand: 'Samsung'
  },
  {
    id: 'fl_4',
    name: 'Dell XPS 13',
    price: 89999,
    originalPrice: 109999,
    image: 'https://via.placeholder.com/300x300?text=Dell+XPS+13',
    platform: 'flipkart',
    category: 'laptop',
    specs: {
      ram: '16GB',
      storage: '512GB SSD',
      processor: 'Intel i7',
      battery: '12 hours',
      display: '13.4"'
    },
    rating: 4.4,
    reviews: 5670,
    fastDelivery: false,
    brand: 'Dell'
  },

  // Amazon Products
  {
    id: 'az_1',
    name: 'iPhone 15 Pro Max',
    price: 132999,
    originalPrice: 159900,
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    platform: 'amazon',
    category: 'mobile',
    specs: {
      ram: '8GB',
      storage: '256GB',
      camera: '48MP',
      battery: '4422mAh',
      display: '6.7"'
    },
    rating: 4.5,
    reviews: 18750,
    fastDelivery: true,
    brand: 'Apple'
  },
  {
    id: 'az_2',
    name: 'MacBook Air M3',
    price: 119900,
    originalPrice: 134900,
    image: 'https://via.placeholder.com/300x300?text=MacBook+Air+M3',
    platform: 'amazon',
    category: 'laptop',
    specs: {
      ram: '8GB',
      storage: '256GB SSD',
      processor: 'Apple M3',
      battery: '18 hours',
      display: '13.6"'
    },
    rating: 4.6,
    reviews: 11200,
    fastDelivery: true,
    brand: 'Apple'
  },
  {
    id: 'az_3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 144999,
    image: 'https://via.placeholder.com/300x300?text=Galaxy+S24+Ultra',
    platform: 'amazon',
    category: 'mobile',
    specs: {
      ram: '12GB',
      storage: '256GB',
      camera: '200MP',
      battery: '5000mAh',
      display: '6.8"'
    },
    rating: 4.4,
    reviews: 9840,
    fastDelivery: true,
    brand: 'Samsung'
  },
  {
    id: 'az_4',
    name: 'Dell XPS 13',
    price: 94999,
    originalPrice: 109999,
    image: 'https://via.placeholder.com/300x300?text=Dell+XPS+13',
    platform: 'amazon',
    category: 'laptop',
    specs: {
      ram: '16GB',
      storage: '512GB SSD',
      processor: 'Intel i7',
      battery: '12 hours',
      display: '13.4"'
    },
    rating: 4.3,
    reviews: 4320,
    fastDelivery: true,
    brand: 'Dell'
  },
  {
    id: 'fl_5',
    name: 'OnePlus 12',
    price: 64999,
    originalPrice: 69999,
    image: 'https://via.placeholder.com/300x300?text=OnePlus+12',
    platform: 'flipkart',
    category: 'mobile',
    specs: {
      ram: '12GB',
      storage: '256GB',
      camera: '50MP',
      battery: '5400mAh',
      display: '6.82"'
    },
    rating: 4.3,
    reviews: 7890,
    fastDelivery: true,
    brand: 'OnePlus'
  },
  {
    id: 'az_5',
    name: 'OnePlus 12',
    price: 66999,
    originalPrice: 69999,
    image: 'https://via.placeholder.com/300x300?text=OnePlus+12',
    platform: 'amazon',
    category: 'mobile',
    specs: {
      ram: '12GB',
      storage: '256GB',
      camera: '50MP',
      battery: '5400mAh',
      display: '6.82"'
    },
    rating: 4.2,
    reviews: 6540,
    fastDelivery: true,
    brand: 'OnePlus'
  }
];

export const brands = ['Apple', 'Samsung', 'OnePlus', 'Dell', 'HP', 'Lenovo', 'Xiaomi', 'Realme'];
export const categories = ['mobile', 'laptop', 'tablet', 'tv', 'headphones'];