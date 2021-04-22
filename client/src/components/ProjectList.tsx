import ProjectTile from './ProjectTile'

const ProjectList = ({projects}: any) => {
  return(
    <div className="projectListContainer">
      {projects.map((project: any) => <ProjectTile project={project}/>)}
    </div>
  )
}

export default ProjectList;