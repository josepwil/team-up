import ProjectTile from './ProjectTile'

const ProjectList = ({projects}: any) => {
  return(
    <div className="projectListContainer">
      {projects.length ? projects.map((project: any) => <ProjectTile project={project}/>) : <h3>no projects found :(</h3>}
    </div>
  )
}

export default ProjectList;