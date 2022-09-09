import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList({value, onChange, interviewers}) {

  const InterviewerList = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={value === interviewer.id}
      setInterviewer={()=> onChange(interviewer.id)}
    />
    )
  })
  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">
    {InterviewerList}
  </ul>
</section>
  )
}
