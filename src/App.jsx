import { useState, useEffect } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap';  

import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {
    const API_URL = import.meta.env.VITE_API_URL
    const [editMode, setEditMode] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data.data);
    } catch (error) {
      console.error('Error while fetching users:', error);
    }
  }
    
  return (
    <Container className="mt-1">
      <Users users={users} />
      <AddUser fetchUser={fetchUser} editMode={editMode} />
    </Container>
  )
}

export default App

