import Link from "next/link";
import styles from "/styles/Footer.module.scss";

const companyLinks = [
    {
        title: "About",
        url: "/#about",
        isExternal: false,
    },
    {
        title: "Services",
        url: "/#services",
        isExternal: false,
    },
    {
        title: "Projects",
        url: "/projects",
        isExternal: true,
    },
    {
        title: "Contact",
        url: "/contact",
        isExternal: true,
    },
];

const socials = [
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/company/teqners/",
        imgSrc: "/static/linkedin.svg",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/teqners_connect/",
        imgSrc: "/static/instagram.svg",
    },
];

const contacts = [
    // {
    //     name: "Telephone",
    //     url: "#",
    //     imgSrc: "/static/tele.svg",
    //     value: "+91 987654310",
    // },
    {
        name: "Email",
        url: "mailto:contact@teqners.com",
        imgSrc: "/static/email.svg",
        value: "contact@teqners.com",
    },
    // {
    //     name: "Location",
    //     url: "#",
    //     imgSrc: "/static/location.svg",
    //     value: "Bangalore, India",
    // },
];
const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.companyList}>
                        <h5 className={styles.listTitle}>Company</h5>
                        <ul className={styles.companyLinks}>
                            {companyLinks.map(
                                ({ title, url, isExternal }, index) => (
                                    <li key={index}>
                                        {isExternal ? (
                                            <Link href={url}>
                                                <a>{title}</a>
                                            </Link>
                                        ) : (
                                            <a href={url}>{title}</a>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.followUs}>
                            <h5 className={styles.socialTitle}>Follow us on</h5>
                            <div className={styles.socialMenu}>
                                {socials.map(({ name, url, imgSrc }, index) => (
                                    <a
                                        href={url}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={index}
                                    >
                                        <picture>
                                            <img src={imgSrc} alt={name} />
                                        </picture>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <picture className={styles.logo}>
                            <img
                                src={"/static/logo--white.png"}
                                alt="teqners"
                            />
                        </picture>
                    </div>
                    <div className={styles.contactList}>
                        <h5 className={styles.listTitle}>Contact</h5>
                        <ul className={styles.contactLinks}>
                            {contacts.map(
                                ({ name, url, imgSrc, value }, index) => (
                                    <li key={index}>
                                        <a
                                            href={url}
                                            className={styles.rowWithIconOnLeft}
                                        >
                                            <picture>
                                                <img
                                                    src={imgSrc}
                                                    alt={name}
                                                    className={
                                                        styles.iconInListItem
                                                    }
                                                />
                                            </picture>
                                            {value}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <p className={styles.copy}>
                    Copyright &copy; 2022 Teqners. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
