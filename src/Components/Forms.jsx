import React from 'react'
import { BsPatchPlusFill } from "react-icons/bs";
function Forms(props) {
    const submitToDoHandler=(e)=>{
        e.preventDefault()
        props.setToDos([
            ...props.toDos,
            { text: props.inputText, completed:false, id:Math.random() }
        ])
        console.log(props.toDos)
        props.setInputText("")
    }
    const inputTextHandler=(e)=>{
        props.setInputText(e.target.value)
        console.log(e.target.value)
    }
  return (
    <form>
        <div className='search'>
            <input type="text" placeholder='add' className='toDo-input' onChange={inputTextHandler} value={props.inputText}/>
            <button type='submit' className='toDo-button' onClick={submitToDoHandler}><BsPatchPlusFill /></button>
        </div>
        <div className='select'>
            <select name="todos" className='filter-toDO'>
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Forms