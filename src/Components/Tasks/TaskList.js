import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import NoTask from "../UI/NoTask";

const TaskList = ({ list, onCheck, onDelete, onEdit }) => {
  if (list.length === 0) {
    return <NoTask />;
  }

  return (
    <Card className={styles.taskList}>
      {list.map((task) => (
        <TaskItem
          key={task.id}
          content={task.text}
          isCompleted={task.isCompleted}
          onClick={() => onCheck(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task.id)}
        />
      ))}
    </Card>
  );
};

export default TaskList;
