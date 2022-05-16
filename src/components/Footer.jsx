function Footer({ todo, setTodo, filter, setFilter }) {
    const numberActivity = [...todo].filter((item) => !item.completed);

    const handleFilter = (filterName) => {
        setFilter(filterName);
    };
    const removeAll = () => {
        setTodo(numberActivity);
    };
    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    {numberActivity.length === 1
                        ? `1 item left`
                        : `${numberActivity.length} items left`}
                </span>

                <ul className="filters">
                    <li>
                        <a
                            href="#"
                            className={filter === "All" ? "selected" : ""}
                            onClick={() => handleFilter("All")}
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={filter === "Active" ? "selected" : ""}
                            onClick={() => handleFilter("Active")}
                        >
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={filter === "Completed" ? "selected" : ""}
                            onClick={() => handleFilter("Completed")}
                        >
                            Completed
                        </a>
                    </li>
                </ul>

                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button
                    className="clear-completed"
                    style={
                        todo.length - numberActivity.length >= 1
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                    }
                    onClick={() => removeAll()}
                >
                    Clear completed
                </button>
            </footer>
        </>
    );
}

export default Footer;
