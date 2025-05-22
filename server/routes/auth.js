import express from 'express';
import passport from 'passport';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Get the frontend URL based on environment
const getFrontendUrl = () => {
  return process.env.FRONTEND_URL || 'http://localhost:3000';
};

// Debug middleware to log requests
router.use((req, res, next) => {
  console.log('Auth Route:', req.method, req.path);
  next();
});

// Google OAuth routes
router.get('/google',
  (req, res, next) => {
    console.log('Initiating Google OAuth...');
    next();
  },
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get('/google/callback',
  (req, res, next) => {
    console.log('Received Google callback...');
    next();
  },
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: true
  }),
  async (req, res) => {
    try {
      console.log('Google authentication successful, setting session...');
      req.session.user = req.user;
      
      // Generate JWT token
      const token = jwt.sign(
        { id: req.user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
      );

      // Set the token in a cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      // Redirect to frontend with success
      const frontendUrl = getFrontendUrl();
      res.redirect(`${frontendUrl}/?auth=success`);
    } catch (error) {
      console.error('Error in Google callback:', error);
      const frontendUrl = getFrontendUrl();
      res.redirect(`${frontendUrl}/login?error=auth_failed`);
    }
  }
);

// Verify token endpoint
router.get('/verify-token', async (req, res) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      console.log('No token found in cookies');
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      console.log('User not found for token');
      return res.status(401).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    console.log('Token verified for user:', user.email);
    res.json({ 
      success: true, 
      user 
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
});

// Logout endpoint
router.post('/logout', (req, res) => {
  try {
    console.log('Logging out user...');
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
    });
    
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    res.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error during logout' 
    });
  }
});

export default router; 