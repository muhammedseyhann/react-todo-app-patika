import { useState } from "react";

function Form({ todo, setTodo }) {
    const [newTask, setNewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { text: newTask, completed: false };
        if (newTask === "") return;
        setTodo([...todo, newTodo]);
        setNewTask("");
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </form>
        </header>
    );
}

export default Form;
