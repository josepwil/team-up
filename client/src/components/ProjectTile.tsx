import '../styles/ProjectTile.css'

const ProjectTile = ({project}:any) => {
  return(
    <div className="tileContainer">
      <img className="tileImage" src={project.image} alt="something"/>
      <h3 className="tileTitle">{project.name}</h3>
      <p className="tileDescription">{project.description}</p>
      <div className="tileTechnologies">
        {project.technologies.map((technology: any) => <div className="tileTechnology">{technology}</div>)}
      </div>
    </div>
  )
}

export default ProjectTile;