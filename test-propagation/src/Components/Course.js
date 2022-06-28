import React from 'react'

function Courses({ courses }) {

  const totalExercises = courses.map(course => {
    return course.parts.reduce((acc, curr) => {
      return acc + curr.exercises;
    }, 0)

  })

  return (
    <>
      {courses.map((course, index) => {
        return (
          <>
            <h1 key={course.id}>
              {course.name}
            </h1>
            {
              course.parts.map(part => {
                return (
                  <>
                    <div key={part.key}>
                      {`${part.name}: ${part.exercises}`}
                    </div>
                    <div key={index}>
                      Total of {totalExercises[index]} exercises
                    </div>
                  </>
                )
              })}
          </>
        )
      })}
    </>
  )
}

export default Courses