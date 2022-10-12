import styles from "./ConfirmModal.module.css";
import Card from "../UI/Card";
import PrimaryButton from "../UI/PrimaryButton";
import Overlay from "../UI/Overlay";

const ConfirmModal = ({ title, content, onModalOpen, onAction }) => {
  const handleAction = () => {
    onAction();
    onModalOpen(false);
  };

  return (
    <Overlay>
      <Card className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        {content && <p className={styles.content}>{content}</p>}
        <div className={styles.actions}>
          <PrimaryButton
            onClick={() => {
              onModalOpen(false);
            }}
          >
            No
          </PrimaryButton>
          <PrimaryButton onClick={handleAction}>Yes</PrimaryButton>
        </div>
      </Card>
    </Overlay>
  );
};

export default ConfirmModal;
