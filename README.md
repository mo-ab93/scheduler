# Interview Scheduler
## Project Description

Interview Scheduler is a Single Page Application(SPA) to track students interviews built with the latest tools and techniques for optimized user experience.
The App allows users to add, edit and delete appointments in real time. It uses  React built-in and custom hooks
Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format.
Moreover, for quality assurance, the project follows best practices of Test Driven Development (TDD).i.e, individual Component is tested in isolation as well as End-to-End testing is performed.

## Project Features
- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
- Days display currently remaining spots and show updates after each modification

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

### Daily view
!['booked-slots-available'](https://github.com/mo-ab93/scheduler/blob/master/public/images/selectday.png)


### Book an Appointment
!['book-an-appointment'](https://github.com/mo-ab93/scheduler/blob/master/public/images/choose.png)


### No slot available for a specific day
!['book-an-appointment'](https://github.com/mo-ab93/scheduler/blob/master/public/images/noslot.png)

### Deleting an appointment
!['book-an-appointment'](https://github.com/mo-ab93/scheduler/blob/master/public/images/delete.png)



## Project Stack

__Front-End:__ React, Axios, JSX, HTML, SASS, JavaScript

__Back-End:__ Express, Node.js, PostgreSQL

__Testing:__ Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer