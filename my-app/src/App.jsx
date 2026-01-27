import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";

function App() {
    return (
        <div>
            <h1>To-do List com Recoil</h1>
            <TodoForm />
            <TodoFilter />
            <TodoList />
        </div>
    );
}

export default App;
