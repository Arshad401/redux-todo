import React, { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deletTodo,editTodo,saveTodo } from "../redux/Reducers/TodoReducer";

function ListTodo() {
  const dispatch = useDispatch();
  const Todos = useSelector((state) => state.todos.todos);
  const  todoRef=useRef();

  const handleSave = (id)=>{
    const editvalue  =todoRef.current.value;
    dispatch(saveTodo({id:id,value:editvalue}))
  }
  return (
    <div className="listCard">
      <ul>
        {Todos.map((todo, index) => (
          <li key={index}>
            {todo.editFlag ? (
              <>
                <p>{todo.value}</p>
                <button  onClick={()=>dispatch(editTodo(todo.id))}><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => dispatch(deletTodo(todo.id))}>
                <i className="fa-solid fa-trash"></i>
                </button>
              </>
            ) : (
              <>
           
              <input type="text" id="editInput" placeholder={todo.value} ref={todoRef} />
                <button onClick={()=>handleSave(todo.id)}><i className="fa-solid fa-circle-check"></i></button>
        
               
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
