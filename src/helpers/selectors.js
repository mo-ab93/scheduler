export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(({name})=> name === day);
  if (state.days.length === 0 || !filteredDay) {
    return [];
  }
  const filteredDays = filteredDay.appointments.map((appointmentId) => state.appointments[appointmentId])
  
  return filteredDays;
}
export function getInterviewersForDay(state, day) {
  const filteredInterviewer = state.days.find(({name})=> name === day);
  if (state.days.length === 0 || !filteredInterviewer) {
    return [];
  }
  const filteredInterviewers = filteredInterviewer.interviewers.map((appointmentId) => state.interviewers[appointmentId])
  
  return filteredInterviewers;
}

export function getInterview(state, interview) {
  if(!interview) return null;

  // const interviewerArray = Object.values(state.interviewers);
  const student = interview.student;
  // const interviewer = interviewerArray.find(({id}) => id === interview.interviewer);

  return {student, interviewer: state.interviewers[interview.interviewer]}

}
