// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectCard={each} key={each.id} />
    }
    return <CourseTimelineCard courseCard={each} key={each.id} />
  }

  return (
    <>
      <h1 className="main-heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <div style={{width: '100%', height: '100vh'}}>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          scrollable={{scrollbar: true}}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(each => renderTimelineCard(each))}
        </Chrono>
      </div>
    </>
  )
}

export default TimelineView
