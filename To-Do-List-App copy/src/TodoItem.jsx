function TodoItem({ task, toggleCompletion, deleteTask }) {
    return (
        <li>
            <span
                onClick={() => toggleCompletion(task.id)}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                    flexGrow: 1,
                }}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}