import styles from "./RoundedButton.module.css";

const RoundedButton = ({ icon, onClick, className }) => {
  return (
    <button className={`${styles.buttonRounded} ${className}`} onClick={onClick}>
      <i className={icon}></i>
    </button>
  )
};

export default RoundedButton;
