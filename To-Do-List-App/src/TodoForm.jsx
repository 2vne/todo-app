import React, { useState } from "react";

// TodoForm: input + add button
function TodoForm({ addTask }) {
    const [text, setText] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed) {
            addTask(trimmed);
            setText("");
        }
    };

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="Add new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;