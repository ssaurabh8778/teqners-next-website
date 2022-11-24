import styles from "/styles/Cta.module.scss";

const Cta: React.FC = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Grow your business online with <u>Teqners</u>
                </h2>

                <p className={styles.ctaParagraph}>
                    No payment required, talk to our expert for free.
                </p>

                <button type="button" className={styles.ctaBtn}>
                    Request a Quote
                </button>
            </div>
        </div>
    );
};

export default Cta;
