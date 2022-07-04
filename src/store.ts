import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { AnyAction, createStore, Reducer } from "redux";
import { getLocalStorage } from "./utils/getLocalStorage";
import { saveLocalStorage } from "./utils/saveLocalStorage";

export interface IToDo {
  text: string;
  id: number;
}
/**  vanilla redux  */

// enum TO_DO {
//   ADD = "ADD",
//   DELETE = "DELETE",
// }

// export const addToDo = (text: string) => {
//   return {
//     type: TO_DO.ADD,
//     text,
//   };
// };

// export const deleteToDo = (id: number) => {
//   return {
//     type: TO_DO.DELETE,
//     id,
//   };
// };

// const reducer: Reducer = (
//   state: IToDo[] = getLocalStorage("toDos") || [],
//   action: AnyAction
// ) => {
//   switch (action.type) {
//     case TO_DO.ADD:
//       return saveLocalStorage([
//         { text: action.text, id: Date.now() },
//         ...state,
//       ]);
//     case TO_DO.DELETE:
//       return saveLocalStorage(
//         state.filter((toDo) => {
//           return toDo.id !== parseInt(action.id);
//         })
//       );
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);

/** redux-toolkit  */

// export const addToDo = createAction<string>("ADD");
// export const deleteToDo = createAction<number>("DELETE");

const initialState = (getLocalStorage() || []) as IToDo[];

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addToDo, (state, action) =>
//       saveLocalStorage([{ text: action.payload, id: Date.now() }, ...state])
//     )
//     .addCase(deleteToDo, (state, action) =>
//       saveLocalStorage(state.filter((toDo) => toDo.id !== action.payload))
//     );
// });

const toDos = createSlice({
  name: "toDosSlice",
  initialState,
  reducers: {
    add: (state, action) =>
      saveLocalStorage([{ text: action.payload, id: Date.now() }, ...state]),
    remove: (state, action) =>
      saveLocalStorage(state.filter((toDo) => toDo.id !== action.payload)),
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
