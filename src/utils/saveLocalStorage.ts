import { IToDo } from "../store";

export const saveLocalStorage = (ToDos: IToDo[]) => {
  window.localStorage.setItem("toDos", JSON.stringify(ToDos));
  return ToDos;
};
