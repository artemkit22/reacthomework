import { useEffect, useState } from 'react'
import Users from './components/users'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
        .then(value => setUser(value))
  }, [])
  return (
      <div className="App">
        <Users user={user} />
      </div>
  )
}

export default App
