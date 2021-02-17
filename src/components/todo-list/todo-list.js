import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';


const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => {
        const {id, label, important, done} = item;
        return (
            
            <li key={id} className="list-group-item"><TodoListItem 
                label={label}
                important={important}
                done={done}
                onDelete={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    })
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  }

  export default TodoList;