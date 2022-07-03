// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { Action, createStore, Reducer } from "redux";

const add = document.getElementById("plus")!;
const number = document.getElementById("number")!;
const minus = document.getElementById("minus")!;

enum method {
  "ADD" = "ADD",
  "MINUS" = "MINUS",
}

const countModifier: Reducer = (count: number = 0, action: Action) => {
  switch (action.type) {
    case method.ADD:
      count++;
      return count;
    case method.MINUS:
      count--;
      return count;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); //스토어 생성

add.addEventListener("click", () => countStore.dispatch({ type: method.ADD }));
minus.addEventListener("click", () =>
  countStore.dispatch({ type: method.MINUS })
);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); //변경점이 있을 때마다 실행
