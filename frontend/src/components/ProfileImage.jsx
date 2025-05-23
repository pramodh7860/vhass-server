import React from 'react';
import { defaultProfile } from '../assets';

const ProfileImage = ({ user, className = '', size = 'md' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-12 h-12';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-12 h-12';
    }
  };

  const imageUrl = user?.profileImage || defaultProfile;

  return (
    <img
      src={imageUrl}
      alt={user?.name || 'Profile'}
      className={`rounded-full object-cover ${getSizeClass()} ${className}`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = defaultProfile;
      }}
    />
  );
};

export default ProfileImage; 