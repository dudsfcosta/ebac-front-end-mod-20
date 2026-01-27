import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors/todoSelectors";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const todos = useRecoilValue(filteredTodoListState);

    if (todos.length === 0) {
        return <p>Nenhuma tarefa encontrada.</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
