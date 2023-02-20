import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import styles from "/styles/contact/contact.module.scss";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Teqners</title>
                <meta
                    name="description"
                    content="Teqners Connect. Your trusted tech partner"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="srOnly">Contact us at Teqners</h1>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.engagingSection}>
                        <picture className={styles.engagingImage}>
                            <img
                                src="/contact-bg.png"
                                alt="two people shaking hands"
                            />
                        </picture>
                        <h2 className={styles.engagingText}>
                            Have a project?
                            <br />
                            We’d love to help.
                        </h2>
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
