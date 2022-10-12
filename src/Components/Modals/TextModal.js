import { useState, useRef, useEffect } from "react";
import styles from "./TextModal.module.css";
import Overlay from "../UI/Overlay";
import Card from "../UI/Card";
import PrimaryButton from "../UI/PrimaryButton";

const TextModal = ({ title, onModalOpen, onAction, initText }) => {
  const [enteredText, setEnteredText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    setEnteredText(initText);
  }, []);

  const handleAction = () => {
    onAction(enteredText);
    onModalOpen(false);
  };

  const handleInputChange = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <Overlay>
      <Card className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <input
          ref={inputRef}
          value={enteredText}
          onChange={handleInputChange}
          type="text"
        />
        <div className={styles.actions}>
          <PrimaryButton
            onClick={() => {
              onModalOpen(false);
            }}
          >
            Cancel
          </PrimaryButton>
          <PrimaryButton onClick={handleAction}>Save</PrimaryButton>
        </div>
      </Card>
    </Overlay>
  );
};

export default TextModal;
