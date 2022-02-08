import { atom, selector } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "c", "d", "e", "f"],
    Doing: [],
    Done: [],
  },
});
