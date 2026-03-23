import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Users({ users, setEditUser}) {
  
  const API_URL = import.meta.env.VITE_API_URL

  return (
    <>
      <h1 className="display-3">Users</h1>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item
            key={user._id}
            className="d-flex justify-content-between align-items-start"
            variant={user.age >= 18 ? 'success' : 'warning'}
          >
            <span>
              {user.name} | {user.email} | {user.age}
            </span>
            <div>
              <Button variant="light" size="sm" className="ms-1"
              onClick={() => setEditUser(user)}
              >🖊️
              </Button>
              <Button variant="danger" size="sm" className="ms-1">
                🗑️
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Users;

/**
 Line 1 - We import the useState hook from React, which allows us to manage state in a functional component.

 Line 3-4 - We import the ListGroup and Button components from the react-bootstrap library, which we will use to display our list of users and action buttons.

 Line 4 - We define a functional component called Users.

 Line 5 - We use the useState hook to create a state variable called users, which is initialized with an array of user objects. Each user object contains a name, email, and age.

 Original Line 7 onwards - Test data was hardcoded into the users state variable for demonstration purposes. In a real application, this data would likely come from an API call to a backend server. Test data looked like this:
 
 function Users() {
  const [users, setUsers] = useState([
    { 
      name: 'Anne', 
      email: 'anne@gmail.com',
      age: 17
    },
    { 
      name: 'Bob', 
      email: 'bob@gmail.com',
      age: 30
    }
  ])
 function Users() {
  const [users, setUsers] = useState([
    { 
      name: 'Anne', 
      email: 'anne@gmail.com',
      age: 17
    },
    { 
      name: 'Bob', 
      email: 'bob@gmail.com',
      age: 30
    }
  ])

 Line 14 - We return a JSX fragment that contains a heading and a ListGroup component.  

 Line 21 - We use the map function to iterate over the users array and render a ListGroup.Item for each user. The variant of the ListGroup.Item is determined by the user's age: if the user is 18 or older, the variant is set to "success" (green), otherwise it is set to "danger" (red). This visually indicates whether the user is an adult or a minor.
 */