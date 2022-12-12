import React from "react";

// style
import "./todo.scss";

import {
  editHandle,
  deleteTask,
  outEditHandle,
  update,
  setDoneHandle,
} from "../../firebase/firebaseAction";

import { setTitleTask } from "../../features/firebaseFeatures";
import { useDispatch, useSelector } from "react-redux";

// Icons
import {
  DoneIcon,
  EditIcon,
  DeleteIcon,
  CloseIcon,
} from "../../assets/icons/icons";

function Todo(todo) {
  const dispatch = useDispatch();
  const newtitle = useSelector((state) => state.firebaseActions.taskTitle);

  return (
    <li className="todo-item">
      <div className="done">
        <button
          type="button"
          className={todo.todo.done ? "isdone" : "done-btn"}
          onClick={() =>
            setDoneHandle(todo.todo.done, todo.todo.id, todo.index)
          }
        >
          <DoneIcon />
        </button>
      </div>

      <div className="content">
        <p
          className={todo.todo.done ? "content-box-done" : "content-box"}
          onDoubleClick={() => editHandle(todo.index)}
        >
          {todo.todo.taskname}
        </p>
        <input
          onBlur={() => {
            update(newtitle, todo.index, todo.todo.id);
          }}
          onChange={(e) => {
            dispatch(setTitleTask(e.target.value));
          }}
          className=" input-form hide"
          placeholder={todo.todo.taskname}
          onKeyPress={(e) => {
            if (e.charCode == 13) update(newtitle, todo.index, todo.todo.id);
          }}
        />
      </div>

      <div className="actions">
        <button
          onClick={() => {
            editHandle(todo.index);
          }}
          type="button"
          className="edit-btn"
        >
          <EditIcon />
        </button>

        <button
          onClick={() => {
            deleteTask(todo.todo.id, todo.todo.taskname);
          }}
          type="button"
          className="delete-btn"
        >
          <DeleteIcon />
        </button>

        <button
          onClick={() => {
            outEditHandle(todo.index);
          }}
          type="button"
          className="hide close-btn"
        >
          <CloseIcon />
        </button>
      </div>
    </li>
  );
}

export default Todo;
