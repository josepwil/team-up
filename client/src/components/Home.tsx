import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/Home.css'
import ProjectList from './ProjectList'
import debounce from 'lodash/debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

const updateProject = (inputTerm: string) => {
  console.log(typeof(inputTerm))
  if(inputTerm) {
    axios.get(`/api/projects/search/${inputTerm}`)
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  } else {
    axios.get('/api/projects')
    .then(res => {
      setProjects(res.data)
    })
    .catch(err => {
      console.log('error: ', err)
    })
  }
}

const updateProjectDebounced = useRef(debounce(updateProject, 500))

const handleChange = (e: any) => {
  setSearchTerm(e.target.value)
  updateProjectDebounced.current(e.target.value || null);
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