import styles from "/styles/About.module.scss";
import variables from "/styles/variables.module.scss";

const About: React.FC = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.container}>
                <h2 className={"section-title"}>About us</h2>
                <div className={styles.content}>
                    <p>
                        Teqners is a team of professional developers covering a
                        range of services. We provide web development, app
                        development, and blockchain development services at our
                        best.
                    </p>
                    <p>
                        We are a continuously growing and competiting online
                        tech agency. We want to make sure that your business get
                        shown to the right audience and grow faster.
                    </p>
                    <p>
                        The world is transformed by ideas and beliefs. If you
                        believe that your idea can transform the world, we are
                        here to turn it into reality.
                    </p>
                </div>

                <a href="#services" className={variables.secondaryBtnClass}>
                    Our Services
                </a>
            </div>
        </div>
    );
};

export default About;
