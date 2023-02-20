/* eslint-disable @next/next/no-img-element */
import styles from "/styles/input.module.scss";

type InputProps = {
    label: string;
    value: string;
    isMultiline?: boolean;
    error?: string;
    required?: string;
};

const Input: React.FC<InputProps & any> = ({
    label,
    value,
    isMultiline = false,
    error = "",
    required = false,
    ...props
}) => {
    return (
        <fieldset
            className={styles.inputContainer}
            data-isvalid={value.length !== 0 && error === "" ? true : false}
        >
            <label htmlFor={props.id} className={styles.label}>
                {label}
            </label>
            {isMultiline ? (
                <textarea
                    className={styles.textarea}
                    value={value}
                    required={required}
                    {...props}
                ></textarea>
            ) : (
                <input
                    className={styles.input}
                    value={value}
                    required={required}
                    {...props}
                />
            )}
            <div className={styles.error}>
                {error ? (
                    <svg
                        className={styles.errorIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
                            fill="currentcolor"
                        />
                    </svg>
                ) : null}
                <span>{error}</span>
            </div>
        </fieldset>
    );
};

export default Input;
