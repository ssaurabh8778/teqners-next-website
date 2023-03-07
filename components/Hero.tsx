import Link from "next/link";
import styles from "/styles/Hero.module.scss";
import variables from "/styles/variables.module.scss";

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title} title="Teqners">
                    Teqners
                </h1>

                <h6 className={styles.slogan}>Your trusted tech partner</h6>
                {/* <p className={styles.para}>
                    We strive to turn your aspirations into reality. The world
                    is transformed by ideas and beliefs. If you believe that
                    your idea can transform the world, we are here to turn it
                    into reality.
                </p> */}

                <div className={styles.btnGroup}>
                    <Link href="/contact">
                        <a className={variables.primaryBtnClass}>
                            Request a Quote
                        </a>
                    </Link>
                    <a href="#about" className={variables.secondaryBtnClass}>
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
