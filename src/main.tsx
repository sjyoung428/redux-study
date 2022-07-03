// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { AnyAction, createStore, Reducer } from "redux";

const form = document.querySelector("form")!;
const input = document.querySelector("input")!;
const ul = document.querySelector("ul")!;

enum TODO {
  ADD = "ADD",
  DELETE = "DELETE",
}

interface IToDo {
  toDo: string;
  id: number;
}

const addToDo = (toDo: string) => {
  return {
    type: TODO.ADD,
    toDo,
  };
};

const deleteToDo = (id: string) => {
  return { type: TODO.DELETE, id };
};

const reducer: Reducer = (state: IToDo[] = [], action: AnyAction) => {
  switch (action.type) {
    case TODO.ADD:
      return [{ toDo: action.toDo, id: Date.now() }, ...state];
    case TODO.DELETE:
      return state.filter((toDo) => {
        return toDo.id !== parseInt(action.id);
      });
    default:
      return [];
  }
};

const store = createStore(reducer);

const dispatchDeleteToDo = (event: any) => {
  const id = event.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const dispatchAddToDo = (toDo: string) => {
  store.dispatch(addToDo(toDo));
};

const paintToDos = () => {
  const toDos: IToDo[] = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", dispatchDeleteToDo);

    li.id = toDo.id + "";
    li.innerText = toDo.toDo;
    ul.appendChild(li);
    li.appendChild(deleteBtn);
  });
};

store.subscribe(paintToDos);

// const createToDo = (toDo: string) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createToDo(toDo);
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
