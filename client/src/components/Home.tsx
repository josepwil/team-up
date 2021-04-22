import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'
import ProjectList from './ProjectList'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

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
      <input className="searchInput" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="...search for a project" />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default Home;