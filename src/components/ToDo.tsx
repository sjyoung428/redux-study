import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IToDo, remove } from "../store";

const ToDo = ({ text, id }: IToDo) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => dispatch(remove(id))}>❌</button>
    </li>
  );
};

export default ToDo;
