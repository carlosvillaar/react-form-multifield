import { useState } from "react"
import blogPosts from "../../../data/blogPosts"

const Main = () => {

  const [newTitle, setNewTitle] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault
    blogPosts.push({
      id: Date.now(),
      title: newTitle
    })
    setNewTitle('')
  }

  return (
    <main>
      <div className='container-md py-5'>
        <h2 className="my-3 pb-3">Aggiungi un nuovo articolo</h2>
      <form action="#" onSubmit={handlerSubmit}>
        <input 
        placeholder="Inserisci un titolo"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        type="text" 
        />
        <button
        type='submit'
        className='btn btn-lg btn-success mx-5'>Aggiungi</button>
      </form>
      <h3 className='my-5'>Lista dei post:</h3>
      <ul className="list-group">
      {blogPosts.map(post => (
        <li 
        className="list-group-item" 
        key={post.id}>
          {post.title}
        </li>
      ))}
      </ul>
    </div>
    </main>
  )
}

export default Main