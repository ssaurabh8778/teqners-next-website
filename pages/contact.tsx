import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import styles from "/styles/contact/contact.module.scss";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact - Teqners</title>
                <meta name="description" content="Contact - Teqners" />
            </Head>
            <h1 className="srOnly">Contact us at Teqners</h1>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.engagingSection}>
                        <picture className={styles.engagingImage}>
                            <img
                                src="/static/contact-bg.jpg"
                                alt="two people shaking hands"
                            />
                        </picture>
                        <h2 className={styles.engagingText}>Wanna talk?</h2>
                    </div>
                    <div className={styles.contactFormContainer}>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
