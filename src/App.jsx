import { useState } from 'react'
import Articles from './data/Articles'

function App() {
  //definisco la costante dello stato iniziale
  const [title, setTitle] = useState('')


  return (
    <>
      <h1>Articles</h1>

        <div className="container">
          {Articles.map((article) => (
            <button key={article.title} className='btn-primary' onClick={() => setTitle(article.title)}>
              Show article title
            </button>
          ))}
          <div className="card">{title}</div>
        </div>


    </>
  )
}

export default App
