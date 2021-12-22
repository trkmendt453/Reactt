import { useState } from 'react';

const Navbar2 = () => {
    const [todos, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
    return (
        <div>
          <button onClick={fetchData}>todos-id</button>
          
            <ul>
              {todos.flatMap(todos => (
                <p key={todos.id}>{todos.id}</p>
              ))}
            </ul>
          
        </div>
      )
    }
export default Navbar2