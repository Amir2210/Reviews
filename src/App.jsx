import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data'
const App = () => {
  const [users, setUsers] = useState(null)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setUsers(data)
  }, [])

  function onPrevPerson() {
    if (index === 0) {
      setIndex(users.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function onNextPerson() {
    if (index === users.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function getRandomPerson() {
    let randomPersonIDX = getRandomInt(0, users.length)
    if (randomPersonIDX === index) {
      if (randomPersonIDX === 0) randomPersonIDX = users.length - 1
      else if (randomPersonIDX === users.length - 1) randomPersonIDX = 0
    }
    setIndex(randomPersonIDX)
  }

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  if (!users) return <div>Loading...</div>
  return (
    <main>
      <article className='review'>
        <div className="img-contaienr">
          <img className='person-img' src={users[index].image} alt="" />
        </div>
        <h4 className='author'>{users[index].name}</h4>
        <p className='job'>{users[index].job}</p>
        <p className='info'>{users[index].text}</p>
        <div className="btn-container">
          <button onClick={onPrevPerson} className='prev-btn' >
            <FaChevronLeft />
          </button>
          <button onClick={onNextPerson} className='next-btn' >
            <FaChevronRight />
          </button>
        </div>
        <button onClick={getRandomPerson} className="btn btn-hipster">Suprise me</button>
      </article>
    </main>
  )
}
export default App
