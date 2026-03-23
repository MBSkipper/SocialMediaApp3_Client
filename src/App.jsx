import { useState, useEffect } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap';  

import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {
    const API_URL = import.meta.env.VITE_API_URL
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const[editUser, setEditUser] = useState (null)

    useEffect(() => {
    fetchUser();
  }, []);

    useEffect(() => {
        setEditMode(Boolean(editUser))
    }, [editUser])

    function resetToNormalMode () {
      setEditMode(false)
      setEditUser(null)
    }

  /******FETCH USERS****** */  
  async function fetchUser() {
    try {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data.data);
    } catch (error) {
      console.error('Error while fetching users:', error);
    }
  }

  /******DELETE USERS****** */
  async function deleteUser(userId) {
    try {
      const res = await axios.delete(`${API_URL}/users/${userId}`);
      alert(res.data.message);
      fetchUser()
    } catch (error) {
      alert('Error while deleting user');
      console.error('Error while deleting user:', error);
    }
  }

    
  return (
    <Container className="mt-1">
      <Users 
        users={users} 
        setEditUser={setEditUser}
        deleteUser={deleteUser} 
      />
      
      <AddUser 
        fetchUser={fetchUser} 
        editMode={editMode} 
        editUser={editUser}
        resetToNormalMode={resetToNormalMode}
      />
    </Container>
  )
}

export default App

