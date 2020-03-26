import React from 'react';
import ReactDOM from 'react-dom';



const Parts = ({ partNames }) => {
  return (
    <p>{partNames.name} {partNames.exercises} </p>
    
    
  )
}


const Course = ({ courseMain }) => {

  if ('parts' in courseMain) {
    return (
      <div>
        <h1>{courseMain.name}</h1>
       {courseMain.parts.map((part, i) => <Parts key={i} partNames={part} />)}
        <b>Total of {courseMain.parts.reduce((sum, order) => {
          return sum + order.exercises
        }, 0)} exercises</b>
      </div>
    )
  } else
    return (
      <h1>{courseMain.name}</h1>
    )
}



const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {course.map((course, i) => <Course key={i} courseMain={course} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))