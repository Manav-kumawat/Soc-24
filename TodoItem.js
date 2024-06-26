import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <input 
                    type="text" 
                    value={newText} 
                    onChange={(e) => setNewText(e.target.value)} 
                />
            ) : (
                <span 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.text}
                </span>
            )}
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;
