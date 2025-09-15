import React from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        {todo.priority && (
          <span className={`priority-badge ${todo.priority}`}>
            {todo.priority}
          </span>
        )}
      </div>

      <div className="todo-actions">
        <button
          onClick={() => onEdit(todo.id)}
          className="edit-btn"
          title="Edit todo"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
          title="Delete todo"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;