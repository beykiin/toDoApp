import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
function ToDo(props) {
    const deleteHandler=()=>{
        props.setToDos( props.toDos.filter((eL)=> eL.id !== props.toDo.id) )
    }
  return (
    <div className='toDo'>
        <button className='complete-btn'><GiCheckMark />
        </button>
        <li className='toDo-item'>{props.text}</li>
        <button className='trash-btn' onClick={deleteHandler}><FaTimes /></button>
    </div>
  )
}

export default ToDo