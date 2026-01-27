import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

export function TodoItem({ todo }) {
    const [todos, setTodos] = useRecoilState(todoListState);

    const toggleTodo = () => {
        setTodos(todos.map(t =>
            t.id === todo.id
                ? { ...t, completed: !t.completed }
                : t
        ));
    };

    const removeTodo = () => {
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    return (
        <li>
      <span
          style={{
              textDecoration: todo.completed ? "line-through" : "none"
          }}
      >
        {todo.text}
      </span>

            <button onClick={toggleTodo}>✔</button>
            <button onClick={removeTodo}>❌</button>
        </li>
    );
}
