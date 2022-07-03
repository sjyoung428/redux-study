import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo, IToDo } from "../store";

const ToDo = ({ text, id }: IToDo) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => dispatch(deleteToDo(id))}>❌</button>
    </li>
  );
};

export default ToDo;
