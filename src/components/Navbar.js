import { useState } from 'react';

const Navbar = () => {
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
          <button onClick={fetchData}>todos-title</button>
          
            <ul>
              {todos.flatMap(todos => (
                <p key={todos.id}>{todos.title}</p>
              ))}
            </ul>
          
        </div>
      )
    }
export default Navbar