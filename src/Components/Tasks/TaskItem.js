import styles from "./TaskItem.module.css";
import RoundedButton from "../UI/RoundedButton";

const TaskItem = ({ content, isCompleted, onClick, onDelete, onEdit }) => {
  return (
    <li className={`${styles.taskItem} ${isCompleted ? styles.completed : ''}`}>
      <span onClick={onClick} className={styles.content}>{content}</span>
      <span>
        <RoundedButton
            className={styles.action}
            icon="fa-regular fa-pen-to-square"
            onClick={onEdit}
        />
        <RoundedButton 
            className={styles.action} 
            icon="fa-solid fa-trash-can"
            onClick={onDelete}
        />
      </span>
    </li>
  );
};

export default TaskItem;
