# VHASS Learning Platform

A full-stack learning management system built with Node.js, Express, MongoDB, and React.

## 🌟 Features

- User Authentication (Email/Password & Google OAuth)
- Course Management
- Workshop Management
- User Progress Tracking
- Admin Dashboard
- Payment Integration (Razorpay & PhonePe)
- Email Notifications
- File Upload System

## 🏗️ Project Structure

```
├── frontend/               # React frontend application
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── dist/              # Build output
│
├── server/                # Node.js backend application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── uploads/          # File uploads directory
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Environment Variables

Create `.env` files in both frontend and server directories:

#### Server (.env)
```env
PORT=5001
MONGODB_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://vhass-server-1.onrender.com/api/auth/google/callback
Gmail=your_gmail
Password=your_gmail_app_password
```

#### Frontend (.env)
```env
VITE_API_URL=https://vhass-server-1.onrender.com
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vhass.git
cd vhass
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the frontend:
```bash
cd frontend
npm run dev
```

## 🔒 Authentication

The application supports two authentication methods:

1. **Email/Password Authentication**
   - Registration with email verification
   - Login with email and password
   - Password reset functionality

2. **Google OAuth**
   - Sign in with Google
   - Automatic account creation for new users
   - Profile synchronization

## 📚 API Endpoints

### Authentication
- `POST https://vhass-server-1.onrender.com/api/auth/register` - Register new user
- `POST https://vhass-server-1.onrender.com/api/auth/login` - User login
- `GET https://vhass-server-1.onrender.com/api/auth/google` - Google OAuth login
- `GET https://vhass-server-1.onrender.com/api/auth/google/callback` - Google OAuth callback

### User
- `GET https://vhass-server-1.onrender.com/api/user/profile` - Get user profile
- `PUT https://vhass-server-1.onrender.com/api/user/profile` - Update user profile
- `POST https://vhass-server-1.onrender.com/api/user/forgot-password` - Request password reset
- `POST https://vhass-server-1.onrender.com/api/user/reset-password` - Reset password

### Courses
- `GET https://vhass-server-1.onrender.com/api/courses` - Get all courses
- `GET https://vhass-server-1.onrender.com/api/courses/:id` - Get single course
- `POST https://vhass-server-1.onrender.com/api/courses` - Create course (admin only)
- `PUT https://vhass-server-1.onrender.com/api/courses/:id` - Update course (admin only)
- `DELETE https://vhass-server-1.onrender.com/api/courses/:id` - Delete course (admin only)

### Workshops
- `GET https://vhass-server-1.onrender.com/api/workshops` - Get all workshops
- `GET https://vhass-server-1.onrender.com/api/workshops/:id` - Get single workshop
- `POST https://vhass-server-1.onrender.com/api/workshops` - Create workshop (admin only)
- `PUT https://vhass-server-1.onrender.com/api/workshops/:id` - Update workshop (admin only)
- `DELETE https://vhass-server-1.onrender.com/api/workshops/:id` - Delete workshop (admin only)

## 💳 Payment Integration

### Razorpay
- Secure payment processing
- Payment verification
- Order management

### PhonePe
- UPI payment support
- Payment status tracking
- Transaction history

## 📧 Email Notifications

The system sends emails for:
- Account verification
- Password reset
- Course enrollment
- Workshop registration
- Payment confirmations

## 🔐 Security Features

- JWT authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting
- Input validation
- XSS protection
- CSRF protection

## 🚀 Deployment

### Backend (Render.com)
- Production URL: https://vhass-server-1.onrender.com
- Automatic deployments from GitHub
- Environment variables configuration
- SSL/TLS enabled

### Frontend (Netlify)
- Continuous deployment
- Environment variables
- Custom domain support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Pramodh Kumar - Initial work

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Render.com for backend hosting
- Netlify for frontend hosting
- Google OAuth for authentication
- Razorpay & PhonePe for payment processing 