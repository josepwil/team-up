import lightbulb from '../images/add_project.jpeg'
import axios from 'axios';
import { useState } from 'react';

const AddProjectForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [image, setImage] = useState<any>()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(image)
    if (image.type !== "image/png" && image.type !== "image/jpeg" && image.type !== "image/jpg") {
      setError('please upload a valid image type')
      return 1;
    }
    if (name === '') {
      setError('please enter a name')
      return 1;
    }
    if (description === '') {
      setError('please enter a description')
      return 1;
    }
    if (technologies === '') {
      setError('please enter some technologies')
      return 1;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('technologies', technologies);
    formData.append('image', image);
  
    
    axios.post('/api/projects', formData)
    .then(res => {
      console.log('project created')
      setName('')
      setDescription('')
      setTechnologies('')
      setImage(null)
      setError('')
      setSuccess('project created')
    })
    .catch(err => {
      console.log('error: ', err)
    })
  }

  return(
    <div className="loginPageContainer">
      <div className="loginFormContainer">
        <h3>Create a new project</h3>
        <form className="loginFormContainer" onSubmit={handleSubmit}>
          <label htmlFor="name" className="labelContainer">
            name
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="description" className="labelContainer">
            description
            <textarea style={{'marginTop': '1rem'}} name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <label htmlFor="technologies" className="labelContainer">
            technologies
            <input type="text" name="technologies" placeholder="comma separated e.g. 'reactJS,php,sql'" value={technologies} onChange={(e) => setTechnologies(e.target.value)}/>
          </label>
          <label htmlFor="image" className="labelContainer">
            image
            <input type="file" name="image" onChange={(e) => setImage(e.target.files![0])}/>
          </label>
          <input type="submit" value="create" />
          {error && <p style={{color: 'red'}}>{error}</p>}
          {success && <p style={{color: 'green'}}>{success}</p>}
        </form>
      </div>
      <img src={lightbulb} alt="aLightbulb" className="loginImage" />
    </div>
  )
}

export default AddProjectForm;