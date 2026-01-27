import { useRecoilState } from "recoil";
import { todoFilterState } from "../atoms/todoAtoms";

export function TodoFilter() {

    const [filter, setFilter] = useRecoilState(todoFilterState);

    return (
        <div>
            <button onClick={() => setFilter("all")}>
                Todas
            </button>

            <button onClick={() => setFilter("completed")}>
                Concluídas
            </button>

            <button onClick={() => setFilter("pending")}>
                Pendentes
            </button>
        </div>
    );
}
