import { useEffect, useState } from "react"
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

  const [posts, setPosts] = useState([])

  const handleField = (e) => {

    let value = e.target.value;

    if (e.target.name === 'category') {
      value = categories[e.target.value]
    }
    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    })
    
  }

  const handleChangeTags = (e) => {

    let { tags, ...others } = formData;

    if (tags.includes(e.target.value)) {
      tags = tags.filter(tag => tag !== e.target.value)
    } else {
      tags = [...tags, e.target.value]
    }
    
    setFormData({
      tags,
      ...others
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    setPosts([
      { id: self.crypto.randomUUID(), ...formData },
      ...posts
    ])
    setFormData(initialFormData)
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return(
    <main>
      <div className="container my-5">
        <div className="card p-4 mb-4">
          <h2 className="mb-3">Aggiungi un post</h2>
          <form action="#" onSubmit={handleSumbit}>
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
          <div className="mb-3">
            <label className="form-label">Tags</label>
            {tags.map(tag => (
              <div key={`tag${tag.id}`} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={tag.name}
                  onChange={handleChangeTags}
                />
                <label className="form-check-label" htmlFor={`tag${tag.id}`}>{tag.name}</label>
              </div>
            ))}
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleField}
            />
            <label className="form-check-label" htmlFor="published">Pubblicato</label>
          </div>

              <button type="submit" className="btn btn-primary" >Aggiungi</button>
          </form>

          {posts.length > 0 ? (<table className="table">
            <thead>
              <tr>
                <th>Immagine</th>
                <th>Titolo</th>
                <th>Contenuto</th>
                <th>Categoria</th>
                <th>Tags</th>
                <th>Disponibile</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td>
                    <img src={post.urlImage} alt={post.title} width="100" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>{post.category}</td>
                  <td>{post.tags.join(', ')}</td>
                  <td>{post.published ? 'Sì' : 'No'}</td>
                  <td>
                    <button onClick={() => handleRemovePost(post.id)} className="btn btn-danger btn-sm" >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          ) : (
            <h2 className="my-5">Non sono presenti post da visualizzare</h2>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main;