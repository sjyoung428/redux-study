import { AnyAction, createStore, Reducer } from "redux";
import { getLocalStorage } from "./utils/getLocalStorage";
import { saveLocalStorage } from "./utils/saveLocalStorage";
// import { getLocalStorage } from "./utils/getLocalStorage";
// import { saveLocalStorage } from "./utils/saveLocalStorage";

enum TO_DO {
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface IToDo {
  text: string;
  id: number;
}

export const addToDo = (text: string) => {
  return {
    type: TO_DO.ADD,
    text,
  };
};

export const deleteToDo = (id: number) => {
  return {
    type: TO_DO.DELETE,
    id,
  };
};

const reducer: Reducer = (
  state: IToDo[] = getLocalStorage("toDos") || [],
  action: AnyAction
) => {
  switch (action.type) {
    case TO_DO.ADD:
      return saveLocalStorage([
        { text: action.text, id: Date.now() },
        ...state,
      ]);
    case TO_DO.DELETE:
      return saveLocalStorage(
        state.filter((toDo) => {
          return toDo.id !== parseInt(action.id);
        })
      );
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
