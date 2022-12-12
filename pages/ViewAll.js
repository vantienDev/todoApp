import React from "react";

// Redux
import { useSelector } from "react-redux";

// Todo Components
import Todo from "../components/Todo/Todo";

function ViewAll() {
  const taskList = useSelector((state) => state.firebaseActions.taskList);

  return (
    <>
      {taskList.map((task, index) => (
        <Todo todo={task} index={index} key={index} />
      ))}
    </>
  );
}

export default ViewAll;
