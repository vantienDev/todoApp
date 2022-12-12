import React from "react";

// Redux
import { useSelector } from "react-redux";

// Todo Components
import Todo from "../components/Todo/Todo";

function Active() {
  const taskList = useSelector((state) => state.firebaseActions.taskList);

  const taskNotDone = taskList.filter((task) => task.done == false);

  return (
    <>
      {taskNotDone.map((task, index) => (
        <Todo todo={task} index={index} key={index} />
      ))}
    </>
  );
}

export default Active;
