import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Atoms/Input";
import { ToastContainer, toast } from "react-toastify";
import checkFormValidity, {
    IFormData,
    validateField,
    trimFormData,
} from "../utils/validateForm";

import styles from "/styles/contact/ContactForm.module.scss";
import variables from "/styles/variables.module.scss";
import "react-toastify/dist/ReactToastify.css";

const receiverEmail = process.env.NEXT_PUBLIC_RECEIVER_EMAIL;

const defaultForm = {
    name: "",
    email: "",
    subject: "",
    description: "",
};

const defaultErrors = {
    name: "",
    email: "",
    subject: "",
    description: "",
};

const ContactForm: React.FC = () => {
    const [form, setForm] = useState<IFormData>(defaultForm);
    const [errors, setErrors] = useState<IFormData>(defaultErrors);
    const [isFormValid, setIsFormValid] = useState<boolean>(
        checkFormValidity(defaultForm).isFormValid
    );

    const [sendButtonText, setSendButtonText] = useState("Send Request");
    const [isSendBtnDisabled, setIsSendBtnDisabled] = useState(!isFormValid);
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrors((currentErrors) => ({
            ...currentErrors,
            [e.target.name]: validateField(e.target.name, e.target.value),
        }));

        setForm((currentForm) => {
            const newForm = {
                ...currentForm,
                [e.target.name]: e.target.value,
            };
            const formValidity = checkFormValidity(newForm).isFormValid;
            setIsFormValid(formValidity);
            setIsSendBtnDisabled(!formValidity);
            return newForm;
        });
    };
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setForm((currentFormData) => trimFormData(currentFormData));
        const { isFormValid: formValidity, errors: newErrors } =
            checkFormValidity(form);

        if (!formValidity) {
            setErrors(newErrors);
        } else {
            setSendButtonText("Sending...");
            setIsSendBtnDisabled(true);

            const emailConfig = {
                to: receiverEmail,
                from: form.email,
                subject:
                    form.name?.split(" ")[0] +
                    ": " +
                    (form.subject || "Project"),
                message:
                    "Name: " +
                    form?.name +
                    "<br/>" +
                    "Email: " +
                    form?.email +
                    "<br/>" +
                    form?.description?.replace(/(\r\n|\r|\n)/g, "<br>"),
            };

            fetch("/api/sendemail", {
                method: "POST",
                body: JSON.stringify(emailConfig),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((res) => res.json())
                .then(({ error: err, info }) => {
                    if (err === null) {
                        toast.success("Email sent successfully!");
                        setForm(defaultForm);
                    } else {
                        toast.error("Something went wrong! Try again.");
                        // console.log(err.response);
                    }
                })

                .finally(() => {
                    setSendButtonText("Send Request");
                    setIsFormValid(false);
                    setIsSendBtnDisabled(false);
                });
        }
    };

    return (
        <div className={styles.contactForm}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className={styles.container}>
                <h2 className={styles.heading}>Contact Us</h2>
                <form
                    id="contact-form"
                    className={styles.form}
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}
                    aria-label="All fields are required"
                >
                    <Input
                        label="Name"
                        value={form?.name || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onInputChange(e)
                        }
                        error={errors.name}
                        type="text"
                        placeholder="Your name"
                        name="name"
                        id="name"
                    />
                    <Input
                        label="Email"
                        value={form?.email || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onInputChange(e)
                        }
                        error={errors.email}
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="Your email"
                        name="email"
                        id="email"
                    />
                    <Input
                        label="Subject"
                        value={form?.subject || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onInputChange(e)
                        }
                        error={errors.subject}
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                    />
                    <Input
                        label="Description"
                        value={form?.description || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onInputChange(e)
                        }
                        error={errors.description}
                        isMultiline={true}
                        placeholder="Tell us about your project"
                        name="description"
                        id="description"
                    />
                    <button
                        type="submit"
                        className={variables.secondaryBtnClass}
                        disabled={isSendBtnDisabled}
                    >
                        {sendButtonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
