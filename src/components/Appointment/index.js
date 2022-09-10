import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


export default function Appointment({time, interview}) {
  return (
    <article className="appointment">
      <Header time={time}/>
      {interview? <Show interviewer={interview.interviewer.name} student={interview.student}/> : <Empty/>}
    </article>
  )
}