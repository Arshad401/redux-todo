import React from "react";
import { addTodo } from "../redux/Reducers/TodoReducer";
import { useDispatch } from "react-redux";

function AddTodo() {
    const dispatch = useDispatch() 
    const handleinput = (e)=>{
        e.preventDefault()
        const inputvalue = e.target.todoInput.value;
        dispatch(addTodo(inputvalue))
        e.target.reset()
    }
  return (
    <div className="addContainer">
      <form onSubmit={handleinput}>
        <input type="text" id="todoInput" required/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
