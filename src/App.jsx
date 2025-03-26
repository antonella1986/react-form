import { useState } from 'react'
import Articles from './data/Articles'

function App() {
  //definisco la costante dello stato iniziale
  const [title, setTitle] = useState('')
  const [newArticle, setNewArticle] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Articles</h1>

        <div className="container">
          {Articles.map((article) => (
/*             <button key={article.title} className='btn-primary' onClick={() => setTitle(article.title)}>
              Show article title
            </button> */
            <h2>{article.title}</h2>
          ))}
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
          type="text"
          className='form-control rounded-0'
          name='new_article'
          id='new_article'
          aria-describedby='title_helper'
          placeholder='Add article'
          value={newArticle}
          onChange={e => setNewArticle(e.target.value)} />
          <button type='submit' className='btn btn-primary justify-content-center'>Sumbit your article</button>
        </form>


    </>
  )
}

export default App
