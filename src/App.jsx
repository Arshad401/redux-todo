import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer'>
      <AddTodo />
      <ListTodo />
    </div>
  )
}

export default App
