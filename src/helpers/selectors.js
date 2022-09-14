export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(({ name }) => name === day);
  if (state.days.length === 0 || !filteredDay) {
    return [];
  }
  const filteredDays = filteredDay.appointments.map(
    (appointmentId) => state.appointments[appointmentId]
  );

  return filteredDays;
}
export function getInterviewersForDay(state, day) {
  const filteredInterviewer = state.days.find(({ name }) => name === day);
  if (state.days.length === 0 || !filteredInterviewer) {
    return [];
  }
  const filteredInterviewers = filteredInterviewer.interviewers.map(
    (appointmentId) => state.interviewers[appointmentId]
  );

  return filteredInterviewers;
}

export function getInterview(state, interview) {
  if (!interview) return null;

  const student = interview.student;

  return { student, interviewer: state.interviewers[interview.interviewer] };
}
