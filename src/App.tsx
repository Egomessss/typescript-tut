import { Greet } from "./components/Greet"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]

  return (
    <div className="App">
      {/* <Greet name="Edmilson" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="sucess"/> */}
      <Heading children={"hello"} />
      <Oscar>
        <Heading>Oscar goes to Leonardo</Heading>
      </Oscar>
      <Greet name={"Edmilson"}
        isLoggedIn={false} />
    </div>
  )
}

export default App
