import React from 'react'
import ToDo from './ToDo'

function ToDoList(props) {

  return (
    <div className='toDo-container'>
        <ul className='toDo-list'>
            {
                props.toDos.map((toDo)=>(
                    <ToDo text={toDo.text} key={toDo.id} toDo={toDo} toDos={props.toDos} setToDos={props.setToDos}/>
                ))
            }
            
        </ul>
    </div>
  )
}

export default ToDoList