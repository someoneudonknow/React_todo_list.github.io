import styles from './Overlay.module.css';

const Overlay = ({children, className, onClose}) => {
    return (
        <div onClick={onClose} className={`${styles.overlay} ${className}`}>
            {children}
        </div>
    )
}

export default Overlay;