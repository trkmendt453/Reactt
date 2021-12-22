import { useState } from 'react';

const Navbar3 = () => {
    const [albums, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
    return (
        <div>
          <button onClick={fetchData}>albums-title</button>
          
            <ul>
              {albums.flatMap(albums => (
                <p key={albums.id}>{albums.title}</p>
              ))}
            </ul>
          
        </div>
      )
    }
export default Navbar3