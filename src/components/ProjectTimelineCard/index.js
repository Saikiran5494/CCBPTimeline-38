// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectCard} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectCard

  return (
    <div>
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="course-card-con">
        <h1 className="heading">{projectTitle}</h1>
        <div className="duration-con">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
