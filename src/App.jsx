// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Forms from './Components/Forms'
import ToDoList from './Components/ToDoList'


function App() {
const [inputText,setInputText]=useState("")
const [toDos,setToDos]=useState([])

  return (
    <>
      <div className='container'>
        <header><h1>৻ To Do List ৲</h1></header>
        <Forms inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos}/>
        <ToDoList  toDos={toDos} setToDos={setToDos} />
      </div>
    </>
  )
}

export default App
