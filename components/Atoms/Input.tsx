import styles from "/styles/input.module.scss";

type InputProps = {
    label: string;
    value: string;
    isMultiline?: boolean;
};

const Input: React.FC<InputProps & any> = ({
    label,
    value,
    isMultiline = false,
    ...props
}) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id} className={styles.label}>
                {label}
            </label>
            {isMultiline ? (
                <textarea
                    className={styles.textarea}
                    value={value}
                    {...props}
                ></textarea>
            ) : (
                <input className={styles.input} value={value} {...props} />
            )}
        </div>
    );
};

export default Input;
