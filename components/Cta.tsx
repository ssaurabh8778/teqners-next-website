import Link from "next/link";
import styles from "/styles/Cta.module.scss";
import variables from "/styles/variables.module.scss";

const Cta: React.FC = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Grow your business online with Teqners
                </h2>

                <p className={styles.ctaParagraph}>
                    No payment required, talk to our expert for free.
                </p>
                <Link href="/contact">
                    <a className={variables.primaryBtnLargeClass}>
                        Request a Quote
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Cta;
