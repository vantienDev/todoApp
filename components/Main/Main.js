// React Librarys
import React, { useEffect } from "react";

// firebase
import { colRef } from "../../firebase/firebase.config";
import { onSnapshot } from "firebase/firestore";
import { isEmpty } from "react-redux-firebase";

// react-router
import { Routes, Route, Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setTaskList, setNewTask } from "../../features/firebaseFeatures";

// Pages
import ViewAll from "../../pages/ViewAll";
import Active from "../../pages/Active";
import Complete from "../../pages/Complete";

// Firebase Actions
import { addNewTask } from "../../firebase/firebaseAction";

// Style
import "./main.scss";

function Main() {
  const dispatch = useDispatch();

  const getNewTask = useSelector((state) => state.firebaseActions.newTask);

  // fetch task list on firestore

  useEffect(() => {
    const fetchTodo = onSnapshot(colRef, (snapshot) => {
      let tasks = [];
      snapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });

      dispatch(setTaskList(tasks));
    });

    return () => fetchTodo();
  }, []);

  return (
    <div className="main">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="label">
          <label htmlFor="creatNewTaskForm">Create A New Task...</label>
        </div>
        <input
          type="text"
          autoComplete="off"
          className="form_input"
          id="creatNewTaskForm"
          onChange={(e) => dispatch(setNewTask(e.target.value))}
          value={getNewTask}
          onBlur={(e) => {
            addNewTask(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.charCode == 13) addNewTask(e.target.value);
          }}
        />
      </form>

      <nav className="nav">
        <Link to="/">View All</Link>
        <p>/</p>
        <Link to="/active">Active</Link>
        <p>/</p>
        <Link to="/complete">Complete</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ViewAll />} />
        <Route path="/active" element={<Active />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default Main;
