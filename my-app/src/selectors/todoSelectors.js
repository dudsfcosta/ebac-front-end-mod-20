import { selector } from "recoil";
import { todoListState, todoFilterState } from "../atoms/todoAtoms";

// Selector que retorna a lista filtrada
export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const todos = get(todoListState);
        const filter = get(todoFilterState);

        switch (filter) {
            case "completed":
                return todos.filter(todo => todo.completed);
            case "pending":
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    },
});
