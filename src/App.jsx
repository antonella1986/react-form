import { useState } from 'react'
import Articles from './data/Articles'

function App() {
  //articles > contiene la lista degli articoli, setArticles > permette di aggiornare la lista
  const [articles, setArticles] = useState(Articles)
  //newArticle > contiene il titolo dell'articolo che l'utente scrive nell'input, setNewArticle > permette di aggiornare il titolo scritto dall'utente
  const [newArticle, setNewArticle] = useState('')
  //content > contiene il contenuto dell'articolo selezionato dall'utente, setContent > permette di aggiornare il contenuto dell'articolo (mostra il contenuto dell'articolo scelto dall'utente)
  const [content, setContent] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    //controlla che l'input non sia vuoto
    if (newArticle !== '') {
      //aggiunge un nuovo articolo alla lista esistente (cioè articles), il nuovo articolo conterrà il titolo scritto dall'utente
      setArticles([...articles, {title: newArticle, content: ''}])
      //resetta il campo una volta inviato il form
      setNewArticle('')
    }
  }

  return (
    <>
      <h1>Articles</h1>

        <div className="container">
          {articles.map((article, index) => (
            //quando l'utente clicca sul titolo dell'articolo, viene aggiornato lo stato di content con il contenuto dell'articolo selezionato. abbiamo messo index nel map perché React ha bisogno di una chiave univoca per ogni elemento generato dinamicamente in una lista, altrimenti mostrerà un errore in console
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
          //aggiorna lo stato newArticle ogni volta che l'utente digita qualcosa
          onChange={e => setNewArticle(e.target.value)} />
          <button type='submit' className='btn btn-primary justify-content-center px-4'>Sumbit your article</button>
        </form>


    </>
  )
}

export default App
