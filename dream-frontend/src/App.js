import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import PostDream from './components/PostDream';
import Chat from './components/Chat';
import Dreams from './components/Dreams';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null); // Track the logged-in user

  return (
    <Router>
        <div className="min-h-screen p-5">
            <NavigationBar user={user} setUser={setUser} />
            <Routes>
                {/* Define routes */}
                <Route path="/" element={!user ? <Landing setUser={setUser} /> : <Navigate to="/postdream" />} />
                <Route path="/postdream" element={user ? <PostDream userId={user._id} /> : <Navigate to="/" />} />
                <Route path="/chat" element={user ? <Chat userId={user._id} /> : <Navigate to="/" />} />
                <Route path="/dreams" element={<Dreams />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;