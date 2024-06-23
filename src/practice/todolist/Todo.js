import React, { useState } from 'react'
import TodoListAdd from './TodoListAdd';


const Todo = () => {
    const [inputText,setInputText] = useState("")
    const [listTodo , setListTodo] = useState([]);
    let addList = (inputText) => {
        setListTodo([...listTodo,inputText])
    }
    const deleteItem = (key) => {
        let newListTodo=[...listTodo];
        newListTodo.splice(key,1);
        setListTodo([...newListTodo])
    }
   
  return (
    <div>
        <h1 className='not-italic text-xl'>Todo List </h1>
        <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-black'>Enter value</label>
      <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' type='text' value={inputText} onChange={e=> {setInputText(e.target.value)}} placeholder='enter the todo'/>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => {addList(inputText) 
        setInputText("")}}>Add</button>
        {listTodo.map((listItem,i) => {
            return(
                <TodoListAdd key={i} item={listItem} index={i}  deleteit={deleteItem}/>
            )
            })}
    </div>
  )
}

export default Todo
