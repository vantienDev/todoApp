import React from "react";

// Redux
import { useSelector } from "react-redux";

// Todo Components
import Todo from "../components/Todo/Todo";

function Complete() {
  const taskList = useSelector((state) => state.firebaseActions.taskList);

  const taskDone = taskList.filter((task) => task.done == true);

  return (
    <>
      {taskDone.map((task, index) => (
        <Todo todo={task} index={index} key={index} />
      ))}
    </>
  );
}

export default Complete;
