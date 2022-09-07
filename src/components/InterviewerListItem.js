import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem({name, avatar,setInterviewer, selected}) {

  const interviewersClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected":selected
  })
  return (
    <li className={interviewersClass} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {selected && name}
</li>
  )
}

