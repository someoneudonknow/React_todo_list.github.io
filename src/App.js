import { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./Components/InputForm/InputForm";
import TaskList from "./Components/Tasks/TaskList";
import ConfirmModal from "./Components/Modals/ConfirmModal";
import TextModal from "./Components/Modals/TextModal";
import PrimaryButton from "./Components/UI/PrimaryButton";

//firebase deploy
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8FyW37LEV8uH6fS2eamlgtT1507fwdOs",
  authDomain: "react-todo-list-cc4d5.firebaseapp.com",
  projectId: "react-todo-list-cc4d5",
  storageBucket: "react-todo-list-cc4d5.appspot.com",
  messagingSenderId: "367208976277",
  appId: "1:367208976277:web:b487e388d78e5aaed5f09c",
  measurementId: "G-RPNT1NSR98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//firebase deploy

function App() {
  const [tasksList, setTaskList] = useState(
    JSON.parse(window.localStorage.getItem("my_task")) || []
  );
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    window.localStorage.setItem("my_task", JSON.stringify(tasksList));
  }, [tasksList]);

  const onAddTask = (task) => {
    setTaskList((prevList) => [...prevList, task]);
  };

  const handleCheckTask = (id) => {
    const newTasks = tasksList.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTaskList(newTasks);
  };

  const handleDeleteTask = (id) => {
    setConfirmDeleteModal(true);
    setDeleteId(id);
  };

  const deleteTask = () => {
    setTaskList((prevList) => prevList.filter((task) => task.id !== deleteId));
  };

  const handleEditTask = (id) => {
    setEditTask(true);
    setEditId(id);
  };

  const changeTask = (enteredText) => {
    const newTasks = tasksList.map((task) => {
      if (task.id === editId) {
        task.text = enteredText;
      }
      return task;
    });
    setTaskList(newTasks);
  };

  const handleDeleteAll = () => {
    setDeleteAll(true);
  };

  return (
    <div className="App">
      {confirmDeleteModal && (
        <ConfirmModal
          onAction={deleteTask}
          onModalOpen={setConfirmDeleteModal}
          title="Are you really want to delete the task ?"
          content={tasksList.find((task) => task.id === deleteId).text}
        />
      )}
      {editTask && (
        <TextModal
          title="Update your task"
          onModalOpen={setEditTask}
          onAction={changeTask}
          initText={tasksList.find((task) => task.id === editId).text}
        />
      )}
      {deleteAll && (
        <ConfirmModal
          onAction={() => setTaskList([])}
          onModalOpen={setDeleteAll}
          title="Are you really want to delete all task ?"
        />
      )}
      <h2 className="gradientText">Todo list</h2>
      <InputForm onAddTask={onAddTask} />
      <TaskList
        onCheck={handleCheckTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
        list={tasksList}
      />
      {tasksList.length > 0 && (
        <PrimaryButton onClick={handleDeleteAll} className="deleteAllBtn">
          Delete All
        </PrimaryButton>
      )}
    </div>
  );
}

export default App;
