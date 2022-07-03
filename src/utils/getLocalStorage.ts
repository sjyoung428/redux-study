import { IToDo } from "../store";

export const getLocalStorage = (key: string): IToDo[] => {
  return JSON.parse(window.localStorage.getItem(key)!);
};
