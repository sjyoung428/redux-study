import { IToDo } from "../store";

export const getLocalStorage = (): IToDo[] => {
  return JSON.parse(window.localStorage.getItem("toDos")!);
};
