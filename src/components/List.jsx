function List({ todo, setTodo, filter }) {
    const toggleCheckAll = () => {
        const checkStatus = todo.every((item) => item.completed);

        const newTodos = [...todo];
        if (checkStatus) {
            newTodos.map((item) => (item.completed = false));
        } else {
            newTodos.map((item) => (item.completed = true));
        }
        setTodo(newTodos);
    };

    const handleCheck = (index) => {
        console.log(index);
        let newTodos = [...todo];
        if (todo[index].completed) {
            newTodos[index].completed = false;
        } else newTodos[index].completed = true;
        setTodo(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    };
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all" onClick={() => toggleCheckAll()}>
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {todo.map((task, index) => {
                        return (
                            <li
                                className={task.completed ? " completed" : ""}
                                key={index}
                                style={
                                    filter === "All" ||
                                    (task.completed &&
                                        filter === "Completed") ||
                                    (!task.completed && filter === "Active")
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                            >
                                <div className="view">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleCheck(index)}
                                    />
                                    <label>{task.text}</label>
                                    <button
                                        className="destroy"
                                        onClick={() => removeTodo(index)}
                                    ></button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

export default List;
