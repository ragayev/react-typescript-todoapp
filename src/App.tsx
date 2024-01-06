import { TodoList } from "./TodoList"

interface item {
    id: number, 
    text: string,
    completed: boolean
}

function App() {
 return <div className="App"><TodoList/></div>
}

export default App
