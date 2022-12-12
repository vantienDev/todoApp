import { updateDoc, doc, deleteDoc, addDoc } from "firebase/firestore";
import { db, colRef } from "./firebase.config";

import { isEmpty } from "react-redux-firebase";

const addNewTask = (newTask) => {
  const inputForm = document.getElementById("creatNewTaskForm");
  inputForm.value = "";

  if (isEmpty(newTask)) {
  } else {
    addDoc(colRef, {
      taskname: newTask,
      done: false,
    }).then(() => {});
  }
};

const editHandle = (index) => {
  // content box
  const contentBox = document.getElementsByClassName("content-box")[index];
  // done btn need to hide
  const doneBtn = document.getElementsByClassName("done-btn")[index];
  // edit btn > hide
  const editBtn = document.getElementsByClassName("edit-btn")[index];
  // delete btn > hide
  const deleteBtn = document.getElementsByClassName("delete-btn")[index];
  // input field
  const inputField = document.getElementsByClassName("input-form")[index];

  const closeBtn = document.getElementsByClassName("close-btn")[index];

  //   Edit toggle
  contentBox.classList.add("hide");
  doneBtn.classList.add("hide");
  editBtn.classList.add("hide");
  deleteBtn.classList.add("hide");

  inputField.classList.remove("hide");
  inputField.focus();
  closeBtn.classList.remove("hide");
};

// Out Edit Toggle
const outEditHandle = (index) => {
  // content box
  const contentBox = document.getElementsByClassName("content-box")[index];
  // done btn need to hide
  const doneBtn = document.getElementsByClassName("done-btn")[index];
  // edit btn > hide
  const editBtn = document.getElementsByClassName("edit-btn")[index];
  // delete btn > hide
  const deleteBtn = document.getElementsByClassName("delete-btn")[index];
  // input field
  const inputField = document.getElementsByClassName("input-form")[index];
  // close btn
  const closeBtn = document.getElementsByClassName("close-btn")[index];

  //  out Edit toggle
  contentBox.classList.remove("hide");
  doneBtn.classList.remove("hide");
  editBtn.classList.remove("hide");
  deleteBtn.classList.remove("hide");

  inputField.classList.add("hide");
  closeBtn.classList.add("hide");
};

const update = (newtitle, index, id) => {
  // update
  if (isEmpty(newtitle)) {
    outEditHandle(index);
  } else {
    // Nho tach docRef ra
    const docRef = doc(db, "users", id);

    updateDoc(docRef, {
      taskname: newtitle,
    }).then(() => {});
    outEditHandle(index);
  }
};

const setDoneHandle = (doneState, id, index) => {
  const done = !doneState;
  const docRef = doc(db, "users", id);
  updateDoc(docRef, {
    done: done,
  }).then(() => {});
};

// delete task
const deleteTask = (id) => {
  const docRef = doc(db, "users", id);

  deleteDoc(docRef).then(() => {});
};

export {
  editHandle,
  deleteTask,
  outEditHandle,
  update,
  addNewTask,
  setDoneHandle,
};
