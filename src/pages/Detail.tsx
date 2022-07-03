import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteToDo, IToDo } from "../store";
import { getTime } from "../utils/getTime";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toDos = useSelector<IToDo[], IToDo[]>((state) => state);
  const dispatch = useDispatch();
  const target = toDos.find((toDo) => toDo.id === parseInt(id!));
  const time = getTime(target?.id!);

  return (
    <>
      <h1>Detail</h1>
      <span>{target?.text}</span>
      <br />
      <span>만들어진 시간: {time}</span>
      <br />
      <button
        onClick={() => {
          dispatch(deleteToDo(target?.id!));
          navigate("/");
        }}
      >
        ❌
      </button>
    </>
  );
};

export default Detail;
