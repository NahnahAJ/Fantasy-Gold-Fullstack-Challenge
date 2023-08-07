import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

initializeApp(firebaseConfig);

const auth = getAuth();


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login');
      console.log('User logged out');

    }).catch((error) => {
      // An error happened.
      console.log('Error:', error);
    });
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  )
};

export default Logout