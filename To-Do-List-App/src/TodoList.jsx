function TodoList({ tasks, toggleCompletion, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleCompletion={toggleCompletion}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}
export default TodoList;