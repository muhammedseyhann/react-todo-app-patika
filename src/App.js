import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
    const [todo, setTodo] = useState([
        { text: "Learn Javascript", completed: true },
        { text: "Learn React", completed: false },
        { text: "Have a book!", completed: false },
    ]);

    const [filter, setFilter] = useState("All");

    return (
        <>
            <section className="todoapp">
                <Form todo={todo} setTodo={setTodo} />
                {/* <!-- This section should be hidden by default and shown when there are todos --> */}
                <List todo={todo} setTodo={setTodo} filter={filter} />

                <Footer
                    todo={todo}
                    setTodo={setTodo}
                    filter={filter}
                    setFilter={setFilter}
                />
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>
                    Created by{" "}
                    <a href="https://github.com/muhammedseyhann">
                        Muhammed Seyhan
                    </a>
                </p>
                <p>
                    Part of <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </footer>
        </>
    );
}

export default App;
