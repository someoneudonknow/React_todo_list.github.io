import Toast from "./Toast";
import styles from "./ToastsList.module.css";
import { useEffect } from "react";

const ToastsList = ({ newToast, onHideToast }) => {
  const toasts = [];
  toasts.push(newToast);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onHideToast();
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.toastList}>
      {toasts.map((toast, index) => (
        <Toast
          key={`${index}${Math.random().toString()}`}
          type={toast.type}
          text={toast.text}
          onHideToast={onHideToast}
        />
      ))}
    </div>
  );
};

export default ToastsList;
