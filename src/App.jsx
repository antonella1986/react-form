import { useState } from 'react'
import Articles from './data/Articles'

function App() {

  const [articles, setArticles] = useState(Articles)
  const [newArticle, setNewArticle] = useState('')
  const [content, setContent] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    if (newArticle !== '') {
      setArticles([...articles, {title: newArticle, content: ''}])
      setNewArticle('')
    }
  }

  return (
    <>
      <h1>Articles</h1>

        <div className="container">
          {articles.map((article, index) => (
            <h2 key={index} onClick={() => setContent(article.content)}>{article.title}</h2>
          ))}
          {content && (
            <div className="article-content">
              <p>{content}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
          type="text"
          className='form-control rounded-2'
          name='new_article'
          id='new_article'
          aria-describedby='title_helper'
          placeholder='Add article'
          value={newArticle}
          onChange={e => setNewArticle(e.target.value)} />
          <button type='submit' className='btn btn-primary justify-content-center px-4'>Sumbit your article</button>
        </form>


    </>
  )
}

export default App
