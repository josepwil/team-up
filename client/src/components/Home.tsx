import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/Home.css'
import ProjectList from './ProjectList'
import debounce from 'lodash/debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

const updateProject = (inputTerm: string) => {
  axios.get(`/api/projects/search/${inputTerm}`)
    .then(res => {
      console.log('data ', res.data)
      setProjects(res.data)
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}

console.log('rerendering')

const updateProjectDebounced = useRef(debounce(updateProject, 500))

const handleChange = (e: any) => {
  setSearchTerm(e.target.value)
  updateProjectDebounced.current(e.target.value);
}

useEffect(() => {
  axios.get('/api/projects')
    .then(res => {
      setProjects(res.data)
    })
    .catch(err => {
      console.log('error: ', err)
    })
},[])

  return(
    <div className="homeContainer">
      <input className="searchInput" type="text" value={searchTerm} onChange={handleChange} placeholder="...search for a project" />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default Home;