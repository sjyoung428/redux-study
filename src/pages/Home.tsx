import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo, deleteToDo, IToDo } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const toDos = useSelector<IToDo[], IToDo[]>((state) => state);
  const dispatch = useDispatch();

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} text={toDo.text} id={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
