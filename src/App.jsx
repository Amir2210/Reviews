import { useEffect, useState } from 'react'
import data from './data'
const App = () => {
  const [users, setUsers] = useState([])
  const [index, setIndex] = [0]
  useEffect(() => {
    setUsers(data)
  }, [])
  if (!users) return <div>Loading...</div>
  const { id, name, job, image, text } = users
  return (
    <main>
      <article className='review'>
        <div className="img-contaienr">
          <img className='person-img' src={users[index].image} alt="" />
        </div>
        <h4 className='author'>{users[index].name}</h4>
        <p className='job'>{users[index].job}</p>
        <p className='info'>{users[index].info}</p>
      </article>
    </main>
  )
}
export default App
