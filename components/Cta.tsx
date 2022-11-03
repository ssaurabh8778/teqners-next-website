import styles from "/styles/Cta.module.scss";

const Cta: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* <a href="/"> */}
            <picture className={styles.triangle}>
                <img src="/triangle.svg" alt="" aria-hidden="true" />
            </picture>
            {/* </a> */}

            <h2 className={styles.title}>Let&apos;s work together!</h2>

            <div className={styles.btnContainer}>
                <button type="button" className={styles.ctaBtn}>
                    Request a quote
                </button>
                <div className={styles.btnBgBox} aria-hidden="true">
                    <div
                        className={styles.line__upperLeft}
                        aria-hidden="true"
                    ></div>
                    <div
                        className={styles.line__lowerRight}
                        aria-hidden="true"
                    ></div>
                    <div
                        className={styles.line__upperLeftOff}
                        aria-hidden="true"
                    ></div>
                    <div
                        className={styles.line__lowerRightOff}
                        aria-hidden="true"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
