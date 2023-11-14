const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part name={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part name={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}




export default App;
