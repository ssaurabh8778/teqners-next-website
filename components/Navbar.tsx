import styles from "/styles/Navbar.module.scss";

type props = {
    navRef: React.RefObject<HTMLInputElement>;
};
const Navbar: React.FC<props> = ({ navRef }: props) => {
    return (
        <div className={styles.navbar} ref={navRef}>
            <div className={styles.container}>
                <img
                    src={"/logo--white.png"}
                    alt="teqners"
                    className={styles.logo}
                />

                <ul className={styles.menu}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                </ul>

                <button type="button" className={styles.cta}>
                    Request a quote
                </button>
            </div>
        </div>
    );
};

export default Navbar;
