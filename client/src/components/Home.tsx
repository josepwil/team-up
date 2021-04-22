import { useState } from 'react';
import '../styles/Home.css'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return(
    <div className="homeContainer">
      <input className="searchInput" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="...search for a project" />
    </div>
  )
}

export default Home;