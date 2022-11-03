import styles from "/styles/About.module.scss";

const About: React.FC = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.container}>
                <h2 className={"section-title"}>About us</h2>
                <div className={styles.rowsContainer}>
                    <div className={styles.row}>
                        <picture className={styles.rowImg}>
                            <img src="/who-are-we.svg" alt="logo" />
                        </picture>
                        <div className={styles.rowContent}>
                            <h3 className={styles.rowTitle}>Who are we?</h3>
                            <p className={styles.rowDesc}>
                                We are a team of six professional developers
                                covering a range of services. We provide web
                                development, app development, and blockchain
                                development services at our best.
                            </p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <picture className={styles.rowImg}>
                            <img src="/what-we-do.svg" alt="logo" />
                        </picture>
                        <div className={styles.rowContent}>
                            <h3 className={styles.rowTitle}>What we do?</h3>
                            <p className={styles.rowDesc}>
                                Take your business online and grow online
                                worldwide.
                            </p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <picture className={styles.rowImg}>
                            <img src="/why-us.svg" alt="logo" />
                        </picture>
                        <div className={styles.rowContent}>
                            <h3 className={styles.rowTitle}>Why us?</h3>
                            <p className={styles.rowDesc}>
                                We are a continuously growing and competiting
                                online tech agency. We want to make sure that
                                your business get shown to the right audience
                                and grow faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
