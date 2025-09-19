import styles from './button.module.css';


export default function Button({ texto, className }) {
    return (
        <button className={`${styles.button} ${className}`}>
            {texto}
        </button>
    );
}
