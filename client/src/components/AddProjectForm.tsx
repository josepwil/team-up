import axios from 'axios';
import { useState } from 'react';

const AddProjectForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [image, setImage] = useState<any>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(image);


    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('technologies', technologies);
    formData.append('image', image);
  
    
    axios.post('/api/projects', formData)
    .then(res => {
      console.log('project created')
    })
    .catch(err => {
      console.log('error: ', err)
    })
  }

  return(
    <div className="loginFormContainer">
      <h3>Create a new project</h3>
      <form className="loginFormContainer" onSubmit={handleSubmit}>
        <label htmlFor="name">
          name
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="description">
          description
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label htmlFor="technologies">
          technologies
          <input type="text" name="technologies" placeholder="comma separated e.g. 'reactJS,PHP,mySQL" value={technologies} onChange={(e) => setTechnologies(e.target.value)}/>
        </label>
        <label htmlFor="image">
          image
          <input type="file" name="image" onChange={(e) => setImage(e.target.files![0])}/>
        </label>
        <input type="submit" value="create" />
      </form>
    </div>
  )
}

export default AddProjectForm;