import { useEffect, useState } from 'react'
import data from './data'
const App = () => {
  const [users, setUsers] = useState([])
  const [index, setIndex] = [0]
  useEffect(() => {
    setUsers(data)
  }, [])
  return (
    <main>
    </main>
  )
}
export default App
