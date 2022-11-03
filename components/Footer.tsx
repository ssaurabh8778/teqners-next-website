import styles from "/styles/Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer} id="footer">
            <div className={styles.container}>
                <img
                    src={"/logo--white.png"}
                    alt="teqners"
                    className={styles.logo}
                />
                <div className={styles.inner}>
                    <div className={styles.leftList__outer}>
                        <h5 className={styles.listTitle}>Contact</h5>
                        <ul className={styles.leftList__inner}>
                            <li>
                                <a
                                    href="#"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <img
                                        src={"/tele.svg"}
                                        alt="telephone"
                                        className={styles.iconInListItem}
                                    />
                                    +91 987654310
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@teqners.com"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <img
                                        src={"/mail.svg"}
                                        alt="mail"
                                        className={styles.iconInListItem}
                                    />
                                    contact@teqners.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <img
                                        src={"/location.svg"}
                                        alt="location"
                                        className={styles.iconInListItem}
                                    />
                                    Delhi, India
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img
                        src={"/logo--column.svg"}
                        alt="teqners"
                        className={styles.logoInMiddle}
                    />
                    <div className={styles.rightList__outer}>
                        <h5 className={styles.listTitle}>Company</h5>
                        <ul className={styles.rightList__inner}>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <p className={styles.copy}>
                        Copyright &copy; 2022 Teqners. All rights reserved.
                    </p>
                    <div className={styles.socialMenu}>
                        <a href="#" className={styles.socialLink}>
                            <img src={"/linkedin.svg"} alt="Linkedin" />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <img src={"/instagram.svg"} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
