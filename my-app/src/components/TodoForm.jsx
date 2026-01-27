import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

export function TodoForm() {
    const [text, setText] = useState("");
    const setTodos = useSetRecoilState(todoListState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setTodos(oldTodos => [
            ...oldTodos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);

        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nova tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
