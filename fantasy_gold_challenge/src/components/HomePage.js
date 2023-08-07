import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';
import SendFeedBackForm from './SendFeedBackForm';

// Initialize Firebase
initializeApp(firebaseConfig);

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false); // State variable to control form display

  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();
    const colRef = collection(db, 'users');

    // Include the realtime data listener
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let fetchedUsers = [];
      snapshot.forEach((user) => {
        fetchedUsers.push({ ...user.data(), id: user.id });
      });
      setUsers(fetchedUsers);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleFillOutClick = () => {
    // Logic to handle the "Fill Out" button click and display the form
    setShowForm(true);
  };

  
  return (
      <main>
      <h1>Share Feedback</h1>
      <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <button onClick={handleFillOutClick}>Fill Out</button>
        </div>
      ))}
      </div>
      {showForm && <SendFeedBackForm />} {/* Render the form conditionally based on showForm state */}
        </main>
  );
};

export default HomePage;
