import styles from "/styles/Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.companyList}>
                        <h5 className={styles.listTitle}>Company</h5>
                        <ul className={styles.companyLinks}>
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
                    <div className={styles.socials}>
                        <div className={styles.followUs}>
                            <h5 className={styles.socialTitle}>Follow us on</h5>
                            <div className={styles.socialMenu}>
                                <a
                                    href="https://www.linkedin.com/company/teqners/"
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <picture>
                                        <img
                                            src={"/linkedin.svg"}
                                            alt="Linkedin"
                                        />
                                    </picture>
                                </a>
                                <a
                                    href="https://www.instagram.com/teqners_connect/"
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <picture>
                                        <img
                                            src={"/instagram.svg"}
                                            alt="Instagram"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <picture className={styles.logo}>
                            <img src={"/logo--white.png"} alt="teqners" />
                        </picture>
                    </div>
                    <div className={styles.contactList}>
                        <h5 className={styles.listTitle}>Contact</h5>
                        <ul className={styles.contactLinks}>
                            <li>
                                <a
                                    href="#"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <picture>
                                        <img
                                            src={"/tele.svg"}
                                            alt="telephone"
                                            className={styles.iconInListItem}
                                        />
                                    </picture>
                                    +91 987654310
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@teqners.com"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <picture>
                                        <img
                                            src={"/mail.svg"}
                                            alt="mail"
                                            className={styles.iconInListItem}
                                        />
                                    </picture>
                                    contact@teqners.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={styles.rowWithIconOnLeft}
                                >
                                    <picture>
                                        <img
                                            src={"/location.svg"}
                                            alt="location"
                                            className={styles.iconInListItem}
                                        />
                                    </picture>
                                    Delhi, India
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className={styles.copy}>
                    Copyright &copy; 2022 Teqners. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
