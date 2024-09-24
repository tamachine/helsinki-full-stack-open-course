const Hello = (props) => {
  console.log(props)
  return (
    <div>
       Hello {props.name}, you are {props.age} years old
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={26 + 18} />
      <Hello name={name}  age={age}/>
    </div>
  )
}

export default App