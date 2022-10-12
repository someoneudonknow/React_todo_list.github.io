import { useState, Fragment, useRef } from "react";
import styles from "./InputForm.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import ToastsList from "../Toast/ToastsList";

const InputForm = ({ onAddTask }) => {
  const [enteredText, setEnteredText] = useState("");
  const [toast, setToast] = useState();
  const inputEl = useRef();
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (enteredText.trim().length === 0) {
      setToast({
        text: "Please enter some task!",
        type: "warning",
      });
      return;
    }
    const newTasks = {
      id: Math.random().toString(),
      text: enteredText,
      isCompleted: false,
    };

    onAddTask(newTasks);
    setEnteredText("");
    inputEl.current.focus();
  };

  const handleInputChange = (e) => {
    setEnteredText(e.target.value);
    setToast(null);
  };

  const handleHideToast = () => {
    setToast(null);
  };

  return (
    <Fragment>
      {toast && <ToastsList onHideToast={handleHideToast} newToast={toast} />}
      <form onSubmit={handleSubmitForm} className={styles.inputForm}>
        <input
          ref={inputEl}
          value={enteredText}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your task"
        />
        <PrimaryButton type="submit" className={styles.button}>
          Add
        </PrimaryButton>
      </form>
    </Fragment>
  );
};

export default InputForm;
