# STYLE-FIT : Full Stack E-commerce Platform

Style-Fit is a modern, full-stack e-commerce application built with React, Node.js, and MongoDB. It features a customer-facing storefront, an admin panel for product management, and a robust backend API with payment integration.

##  Features

### Customer Features
- **User Authentication**: Registration, login, and Google OAuth integration
- **Product Browsing**: Browse products by categories and subcategories
- **Search Functionality**: Search products with real-time filtering
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Management**: Place orders with Cash on Delivery (COD) or Razorpay payment
- **Order Tracking**: View order history and status
- **Voice Assistant**: AI-powered voice navigation using Web Speech API
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Product Details**: Multiple product images, sizes, and detailed descriptions

### Admin Features
- **Admin Dashboard**: Secure admin login with dedicated panel
- **Product Management**: Add, list, and remove products
- **Image Upload**: Multiple product images with Cloudinary integration
- **Order Management**: View all orders and update order status
- **Inventory Control**: Manage product categories, sizes, and bestseller status

### Technical Features
- **JWT Authentication**: Secure token-based authentication with HTTP-only cookies
- **File Upload**: Multer middleware for handling product images
- **Cloud Storage**: Cloudinary integration for image storage
- **Payment Gateway**: Razorpay integration for online payments
- **Database**: MongoDB with Mongoose ODM
- **API Security**: CORS configuration and input validation
- **Real-time Updates**: Context API for state management

##  Architecture

The application follows a three-tier architecture:

```
Style-Fit/
├── frontend/          # Customer-facing React application
├── admin/            # Admin panel React application  
└── backend/          # Node.js/Express API server
```

### Frontend (Customer App)
- **Framework**: React 19.1.0 with Vite
- **Styling**: Tailwind CSS 4.1.8
- **Routing**: React Router DOM 7.6.2
- **State Management**: React Context API
- **Authentication**: Firebase Auth with Google OAuth
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: React Icons

### Admin Panel
- **Framework**: React 19.1.0 with Vite
- **Styling**: Tailwind CSS 4.1.8
- **Routing**: React Router DOM 7.6.2
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Notifications**: React Toastify

### Backend API
- **Runtime**: Node.js with Express 5.1.0
- **Database**: MongoDB with Mongoose 8.15.1
- **Authentication**: JWT with bcryptjs
- **File Upload**: Multer 2.0.1
- **Cloud Storage**: Cloudinary 2.6.1
- **Payment**: Razorpay 2.9.6
- **Validation**: Validator 13.15.15
- **Security**: CORS, cookie-parser

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account
- Razorpay account (for payments)
- Firebase project (for Google Auth)

### Environment Variables

Create `.env` files in the backend directory:

```env
# Database
MONGODB_URL=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Server
PORT=6000
```

Create `.env` file in the frontend directory:

```env
# Firebase
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

### Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/praveenguptaa/Style-Fit.git
cd Style-Fit
```

2. **Backend Setup**
```bash
cd backend
npm install
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

4. **Admin Panel Setup**
```bash
cd admin
npm install
npm run dev
```

### Default URLs
- Frontend: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`
- Backend API: `http://localhost:8000`

##  Usage Guide

### For Customers

1. **Registration/Login**
   - Create account with email/password
   - Or login with Google OAuth
   - Secure JWT-based authentication

2. **Shopping**
   - Browse products on home page
   - Use search functionality in collections
   - Filter by categories and subcategories
   - View detailed product information

3. **Cart & Checkout**
   - Add products to cart with size selection
   - Update quantities or remove items
   - Proceed to checkout with address details
   - Choose payment method (COD or Razorpay)

4. **Voice Assistant**
   - Click the AI icon to activate voice commands
   - Say commands like "open search", "go to cart", "show orders"
   - Navigate hands-free through the application

5. **Order Management**
   - View order history in "My Orders"
   - Track order status updates
   - Receive notifications for order changes

### For Administrators

1. **Admin Login**
   - Access admin panel with credentials
   - Secure admin-only authentication

2. **Product Management**
   - Add new products with multiple images
   - Set categories, subcategories, and sizes
   - Mark products as bestsellers
   - Remove products from inventory

3. **Order Management**
   - View all customer orders
   - Update order status (Order Placed, Shipped, Delivered)
   - Monitor order details and customer information

##  API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /registration` - User registration
- `POST /login` - User login
- `POST /googlelogin` - Google OAuth login
- `POST /adminlogin` - Admin login
- `GET /logout` - User logout

### Product Routes (`/api/product`)
- `GET /list` - Get all products
- `POST /add` - Add new product (Admin)
- `DELETE /remove/:id` - Remove product (Admin)

### Cart Routes (`/api/cart`)
- `POST /add` - Add item to cart
- `POST /get` - Get user cart
- `POST /update` - Update cart item quantity

### Order Routes (`/api/order`)
- `POST /place` - Place order (COD)
- `POST /razorpay` - Place order (Razorpay)
- `POST /verifyrazorpay` - Verify Razorpay payment
- `POST /userorders` - Get user orders
- `GET /list` - Get all orders (Admin)
- `POST /status` - Update order status (Admin)

##  Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String,
  cartData: Object (default: {}),
  timestamps: true
}
```

### Product Model
```javascript
{
  name: String (required),
  image1-4: String (required),
  description: String (required),
  price: Number (required),
  category: String (required),
  subCategory: String (required),
  sizes: Array (required),
  date: Number (required),
  bestseller: Boolean,
  timestamps: true
}
```

### Order Model
```javascript
{
  userId: String (required),
  items: Array (required),
  amount: Number (required),
  address: Object (required),
  status: String (default: 'Order Placed'),
  paymentMethod: String (required),
  payment: Boolean (default: false),
  date: Number (required),
  timestamps: true
}
```

##  Security Features

- **JWT Authentication**: Secure token-based auth with HTTP-only cookies
- **Password Hashing**: bcryptjs for secure password storage
- **Input Validation**: Validator library for email and password validation
- **CORS Configuration**: Restricted origins for API access
- **Admin Protection**: Separate admin authentication system
- **Secure Cookies**: HTTP-only, secure, and SameSite cookie settings

## UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Loading indicators for better user experience
- **Toast Notifications**: Real-time feedback for user actions
- **Voice Navigation**: AI-powered voice assistant for accessibility
- **Image Carousel**: Multiple product images with smooth transitions
- **Search Functionality**: Real-time product search and filtering
- **Cart Persistence**: Cart data synced across sessions

## Deployment

The application is configured for deployment on Render.com:

- **Frontend**: ``
- **Admin Panel**: ``

### Build Commands
```bash
# Frontend & Admin
npm run build

# Backend
npm start
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


##  Developer

**Praveen Gupta**
- GitHub: [@praveenguptaa](https://github.com/praveenguptaa)

