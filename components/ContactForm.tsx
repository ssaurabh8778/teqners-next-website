import { FormEvent, useRef, useState } from "react";
import Input from "./Atoms/Input";
import styles from "/styles/contact/ContactForm.module.scss";
import variables from "/styles/variables.module.scss";
import { FileUploader } from "react-drag-drop-files";
import FileItem from "./Atoms/FileItem";
import Email from "./utils/smtp";

const ContactForm: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const [sendButtonText, setSendButtonText] = useState("Send Request");
    const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
    useState("Send Request");

    const formRef = useRef("#contact-form");
    const [form, setForm] = useState<{
        name?: string;
        email?: string;
        subject?: string;
        description?: string;
    }>({});

    const isFileUnique = (fileList: File[], x: File) => {
        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].name == x.name) {
                return false;
            }
        }
        return true;
    };

    const onFileChange = (newSelectedFiles: FileList) => {
        // console.log(newSelectedFiles);

        setFiles((currentFiles: File[]) => {
            // console.log(currentFiles[0]);
            if (currentFiles.length < 3) {
                const newFiles: File[] = [];
                let i = 0;
                while (
                    newSelectedFiles[i] &&
                    currentFiles.length + newFiles.length < 3
                ) {
                    if (isFileUnique(currentFiles, newSelectedFiles[i])) {
                        newFiles.push(newSelectedFiles[i]);
                    }
                    i++;
                }
                return [...currentFiles, ...newFiles];
            }
            return currentFiles;
        });
    };

    const onFileDelete = (name: string) => {
        setFiles((currentFiles) =>
            currentFiles.filter(
                (file) =>
                    file?.name != name || file === null || file === undefined
            )
        );
    };

    const convertToDataUrl = (fileList: File[]) => {
        const newFileList: {
            name: string;
            data: string | ArrayBuffer | null;
        }[] = [];
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // console.log(reader.result);

                newFileList.push({
                    name: file.name,
                    data: reader.result,
                });
            };
            reader.readAsDataURL(file);
        });
        return newFileList;
    };

    const onInputChange = (e: FormEvent<HTMLFormElement>) => {
        // console.log(typeof e);
        if (e?.target?.name !== "attachment") {
            setForm((currentForm) => ({
                ...currentForm,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendButtonText("Sending...");
        setIsSendButtonDisabled(true);
        if (!form.email) {
            return false;
        }
        const nameAbbr =
            form?.name?.split(" ").length > 1
                ? form?.name?.split(" ")[0] +
                  " " +
                  form?.name?.split(" ")[1][0] +
                  "."
                : form?.name;

        const emailConfig = {
            Host: "smtp.elasticemail.com",
            Username: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            Password: process.env.NEXT_PUBLIC_SMTP_PASS,
            To: "g03tiwari@gmail.com",
            From: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            Subject: nameAbbr + ": " + form?.subject || "Project",
            Body:
                "From: " +
                    form?.email +
                    "<br/>" +
                    form?.description?.replace(/(\r\n|\r|\n)/g, "<br>") || "",
            // Attachments: [
            //     {
            //         name: "smtpjs.png",
            //         path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
            //     },
            // ],
            // Attachments: convertToDataUrl(files),
        };

        console.log(emailConfig);
        setForm({});

        Email.send(emailConfig)
            .then((message) => console.log(message))
            .catch((err) => console.log(err))
            .finally(() => {
                setSendButtonText("Send Request");
                setIsSendButtonDisabled(false);
            });
    };

    return (
        <div className={styles.contactForm}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Contact Us</h2>
                <form
                    id="contact-form"
                    ref={formRef && null}
                    className={styles.form}
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}
                    // onChange={(e) => onInputChange(e)}
                >
                    <Input
                        label="Name"
                        value={form?.name || ""}
                        onChange={(e: FormEvent<HTMLFormElement>) =>
                            onInputChange(e)
                        }
                        type="text"
                        placeholder="Your name"
                        name="name"
                        id="name"
                    />
                    <Input
                        label="Email"
                        value={form?.email || ""}
                        onChange={(e: FormEvent<HTMLFormElement>) =>
                            onInputChange(e)
                        }
                        type="email"
                        placeholder="Your email"
                        name="email"
                        id="email"
                    />
                    <Input
                        label="Subject"
                        value={form?.subject || ""}
                        onChange={(e: FormEvent<HTMLFormElement>) =>
                            onInputChange(e)
                        }
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                    />
                    <Input
                        label="Description"
                        value={form?.description || ""}
                        onChange={(e: FormEvent<HTMLFormElement>) =>
                            onInputChange(e)
                        }
                        isMultiline={true}
                        placeholder="Tell us about your project"
                        name="description"
                        id="description"
                    />
                    {/* <Input
                        label={fileInputLabel}
                        type="file"
                        id="attachment"
                        style={{ visibility: "hidden", height: 0, padding: 0 }}
                        onChange={(e: Event) => onFileChange(e)}
                    /> */}

                    {/* <div className={styles.fileInput}>
                        <FileUploader
                            handleChange={(files: FileList) =>
                                onFileChange(files)
                            }
                            name="attachment"
                            multiple={true}
                            maxSize={5}
                            disabled={files.length >= 3}
                        >
                            <label className={styles.dropZoneLabel}>
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1732 9.71836L10.5149 17.3767C9.57669 18.3149 8.30421 18.842 6.97739 18.842C5.65057 18.842 4.37809 18.3149 3.43989 17.3767C2.50169 16.4385 1.97461 15.166 1.97461 13.8392C1.97461 12.5124 2.50169 11.2399 3.43989 10.3017L11.0982 2.64336C11.7237 2.01789 12.572 1.6665 13.4566 1.6665C14.3411 1.6665 15.1894 2.01789 15.8149 2.64336C16.4404 3.26883 16.7917 4.11714 16.7917 5.00169C16.7917 5.88624 16.4404 6.73455 15.8149 7.36002L8.14822 15.0184C7.99337 15.1732 7.80954 15.296 7.60722 15.3798C7.4049 15.4636 7.18805 15.5068 6.96906 15.5068C6.75007 15.5068 6.53322 15.4636 6.3309 15.3798C6.12857 15.296 5.94474 15.1732 5.78989 15.0184C5.63504 14.8635 5.51221 14.6797 5.4284 14.4774C5.3446 14.275 5.30146 14.0582 5.30146 13.8392C5.30146 13.6202 5.3446 13.4034 5.4284 13.201C5.51221 12.9987 5.63504 12.8149 5.78989 12.66L12.8649 5.59336"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Upload (Max 5mb/file. Max 3)
                            </label>
                        </FileUploader>
                        {files.length > 0 ? (
                            <div className={styles.files}>
                                {files.map((file, i) => (
                                    <FileItem
                                        key={i}
                                        file={file}
                                        onDelete={onFileDelete}
                                    />
                                ))}
                            </div>
                        ) : null}
                    </div> */}

                    <button
                        type="submit"
                        className={variables.secondaryBtnClass}
                        disabled={isSendButtonDisabled}
                    >
                        {sendButtonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
