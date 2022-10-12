import styles from "./Toast.module.css";
import Card from "../UI/Card";

const Toast = ({ type, text, onHideToast}) => {
  let icon = <i className="fa-solid fa-circle-check"></i>;

  switch (type) {
    case "warning":
      icon = <i className="fa-solid fa-circle-exclamation"></i>;
      break;
    case "error":
      icon = <i className="fa-solid fa-triangle-exclamation"></i>;
      break;
    case "info":
      icon = <i className="fa-solid fa-circle-info"></i>;
      break;
    default:
      break;
  }

  return (
    <Card className={`${styles.toast} ${styles[type]}`}>
      {icon}
      <p className={styles.text}>{text}</p>
      <div onClick={onHideToast} className={styles.cancel}>&times;</div>
    </Card>
  );
};

export default Toast;
