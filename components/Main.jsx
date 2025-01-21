import { useState } from "react"
import { categories, tags } from "../data/blogPosts"


const Main = () => {

  const initialFormData = {
    title: '',
    urlImage: '',
    content: '',
    category: '',
    tags: [],
    published: false
  }
  
  const [formData, setFormData] = useState(initialFormData)

  const handleField = (e) => {

    let value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value
    })
    
  }

  return(
    <main>
      <div className="container my-5">
        <div className="card p-4 mb-4">
          <h2 className="mb-3">Aggiungi un post</h2>
          <form action="#">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Titolo</label>
              <input 
              type="text"
              name="title"
              className="form-control"
              placeholder="Inserisci il titolo"
              value={formData.title}
              onChange={handleField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Immagine</label>
              <input
                type="text"
                className="form-control"
                placeholder="URL dell'immagine"
                name="urlImage"
                value={formData.urlImage}
                onChange={handleField}
              />
            </div>
              <button type="submit" className="btn btn-primary" >Aggiungi</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Main;