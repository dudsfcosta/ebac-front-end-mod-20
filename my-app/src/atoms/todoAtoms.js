import { atom } from "recoil";

// Átomo que armazena a lista de tarefas
export const todoListState = atom({
    key: "todoListState",
    default: [],
});

// Átomo que armazena o filtro atual
export const todoFilterState = atom({
    key: "todoFilterState",
    default: "all", // all | completed | pending
});
