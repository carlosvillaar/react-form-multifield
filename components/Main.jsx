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
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Contenuto</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Inserisci il contenuto"
                name="content"
                value={formData.content}
                onChange={handleField}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="categories" className="form-label">Seleziona una categoria</label>
            <select
              name="category"
              className="form-select"
              onChange={handleField}
              defaultValue=""
            >
              {categories.map((category, index) => (
              <option key={index} value={index}>{category}</option>
              ))}
            </select>
          </div>
              <button type="submit" className="btn btn-primary" >Aggiungi</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Main;