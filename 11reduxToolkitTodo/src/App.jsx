import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <h1 className="text-center text-white text-3xl p-4 mt-12">Manage Your Todos</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
