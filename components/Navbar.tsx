import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "/styles/Navbar.module.scss";
import variables from "/styles/variables.module.scss";

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
];
const Menu = () => (
    <>
        {companyLinks.map(({ title, url, isExternal }, index) => (
            <li key={index}>
                {isExternal ? (
                    <Link href={url}>
                        <a>{title}</a>
                    </Link>
                ) : (
                    <a href={url}>{title}</a>
                )}
            </li>
        ))}
        <li>
            <Link href={"/contact"}>
                <a className={variables.secondaryBtnSmallClass}>
                    Request a quote
                </a>
            </Link>
        </li>
    </>
);
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuVersion, setMenuVersion] = useState("mobile");
    const navRef = useRef<any>(null);

    // const setHeightInCss = (): void => {
    //     if (navRef?.current) {
    //         console.log(`${navRef.current.clientHeight}px`);
    //         document
    //             .getElementsByTagName("html")[0]
    //             .style.setProperty(
    //                 "--navbar-height",
    //                 `${navRef.current.clientHeight}px`
    //             );
    //     }
    // };

    const setMenu = useCallback(
        () =>
            navRef?.current?.clientWidth >= 800
                ? setMenuVersion("desktop")
                : setMenuVersion("mobile"),
        [navRef]
    );

    useEffect(() => {
        // setHeightInCss();
        setMenu();
        window.addEventListener("resize", () => {
            // setHeightInCss();
            setMenu();
        });
        window.addEventListener("orientationchange", () => {
            // setHeightInCss();
            setMenu();
        });
        return () => {
            window.removeEventListener("resize", () => {
                // setHeightInCss();
                setMenu();
            });
            window.removeEventListener("orientationchange", () => {
                // setHeightInCss();
                setMenu();
            });
        };
    }, [navRef, setMenu]);
    return (
        <nav className={styles.navbar} ref={navRef}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <picture className={styles.logo}>
                            <img
                                src={"/static/logo-icon--white.svg"}
                                alt="Teqners"
                            />
                        </picture>
                    </a>
                </Link>

                {menuVersion == "mobile" ? (
                    <>
                        {/* Menu Icon and Close Icon based on condition*/}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.menuIcon}
                            onClick={() =>
                                setIsMenuOpen((currentStatus) => !currentStatus)
                            }
                        >
                            {isMenuOpen ? (
                                // Close Icon
                                <path
                                    d="M13.4854 12.0711L19.1421 17.7279L17.7279 19.1421L12.0712 13.4854L6.41436 19.1421L5.00015 17.7279L10.6569 12.0711L5 6.41421L6.41421 5L12.0712 10.6569L17.7281 5.00001L19.1423 6.41423L13.4854 12.0711Z"
                                    fill="#F9F9F9"
                                />
                            ) : (
                                // Menu Icon
                                <path
                                    d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                                    fill="#F9F9F9"
                                />
                            )}
                        </svg>
                        <ul
                            className={
                                styles.menuMobile +
                                " " +
                                (isMenuOpen ? "" : styles["menuMobile--close"])
                            }
                        >
                            <Menu />
                        </ul>
                    </>
                ) : (
                    <ul className={styles.menuDesktop}>
                        <Menu />
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
