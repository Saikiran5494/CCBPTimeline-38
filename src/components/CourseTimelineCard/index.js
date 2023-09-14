// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseCard} = props
  const {courseTitle, description, duration, tagsList} = courseCard

  return (
    <>
      <div className="course-card-con">
        <h1 className="heading">{courseTitle}</h1>
        <div className="duration-con">
          <AiFillClockCircle className="time" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-container">
        {tagsList.map(tag => (
          <p key={tag.id} className="tag">
            {tag.name}
          </p>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
